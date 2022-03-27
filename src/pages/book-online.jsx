import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import googleCalendarPlugin from "@fullcalendar/google-calendar"
import interactionPlugin from "@fullcalendar/interaction"
import React, { useState, useRef } from "react"
import { Select } from "react-materialize"
import TimePicker from "react-bootstrap-time-picker"
import { Form, Modal, Button, Row, Col } from "react-bootstrap"
import ApiCalendar from "react-google-calendar-api"
import "../styles/pages/bookOnlineCalendar.scss"
import Layout from "../components/layout"

const BookNowCalendar = () => {
  const [showModal, setShowModal] = useState(false)
  const [dayInfo, setDayInfo] = useState({
    summary: [],
    description: "",
    start: {
      dateTime: "",
      timeZone: "America/New_York",
    },
    end: {
      dateTime: "",
      timeZone: "America/New_York",
    },
    errors: "",
    dateStr: "",
  })
  const [signedIn, setSignedIn] = useState(false)
  const [validated, setValidated] = useState(false)
  const calendarRef = useRef(null)

  const eventClicked = info => {
    info.jsEvent.preventDefault()

    if (info.event.url) {
      window.open(info.event.url)
    }
  }

  const handleDateClick = info => {
    if (signedIn) {
      setDayInfo({
        ...dayInfo,
        dateStr: info.dateStr,
      })
      setShowModal(true)
    } else {
      handleGoogleAuth()
    }
  }

  const handleGoogleAuth = () => {
    if (!signedIn) {
      ApiCalendar.handleAuthClick()
        .then(() => {
          console.log("sign in succesful!")
          setSignedIn(true)
        })
        .catch(e => {
          console.error(`sign in failed ${e}`)
        })
    } else {
      ApiCalendar.handleSignoutClick()
      console.log("Signed out")
      setSignedIn(false)
    }
  }

  const modalHandler = () => {
    setShowModal(false)
  }

  const msToTime = s => {
    let timeStr = ""
    let secs = s % 60
    s = (s - secs) / 60
    let mins = s % 60
    let hrs = (s - mins) / 60

    if (hrs < 10) {
      timeStr += `0${hrs}:`
    } else {
      timeStr += `${hrs}:`
    }

    if (mins < 10) {
      timeStr += `0${mins}`
    } else {
      timeStr += `${mins}`
    }

    return timeStr
  }

  const handleAddDate = () => {
    const response = ApiCalendar.getBasicUserProfile()
    let startStr = new Date(
      dayInfo.dateStr + "T" + msToTime(dayInfo.start.dateTime)
    )
    let endStr = new Date(
      dayInfo.dateStr + "T" + msToTime(dayInfo.end.dateTime)
    )
    let eventToAdd = {
      summary: dayInfo.description,
      title: dayInfo.description,
      start: {
        dateTime: startStr,
        timeZone: "America/New_York",
      },
      end: {
        dateTime: endStr,
        timeZone: "America/New_York",
      },
      attendees: [
        {
          email: process.env.DEFAULT_EMAIL,
          responseStatus: "accepted",
        },
        { email: response.getEmail() },
      ],
      recurrence: [],
      reminders: {},
    }

    ApiCalendar.createEvent(eventToAdd)
      .then(result => {
        console.log(result)
        setShowModal(false)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleSelectChange = e => {
    let options = e.target.options
    let value = []
    for (var i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value)
      }
    }
    setDayInfo({
      ...dayInfo,
      description: `Appointment for ${value.length} services`,
      summary: value,
      errors: "",
    })
  }

  const handleTimeStartChange = e => {
    setDayInfo({
      ...dayInfo,
      start: {
        dateTime: e,
        timeZone: "America/New_York",
      },
      end: {
        dateTime: e + dayInfo.summary.length * 3600,
        timeZone: "America/New_York",
      },
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    if (dayInfo.summary.length > 0) {
      setValidated(true)
      setDayInfo({
        ...dayInfo,
      })
      handleAddDate()
    } else {
      setValidated(false)
      setDayInfo({
        ...dayInfo,
        errors: "Please select a service",
      })
    }
  }

  return (
    <Layout>
      <div className="container mt-4">
        <FullCalendar
          ref={calendarRef}
          plugins={[dayGridPlugin, googleCalendarPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          customButtons={{
            customNext: {
              text: ">",
              click: function () {
                calendarRef.current._calendarApi.next()
              },
            },
            customPrev: {
              text: "<",
              click: function () {
                calendarRef.current._calendarApi.prev()
              },
            },
          }}
          googleCalendarApiKey={process.env.GOOGLE_CLIENT_SECRET}
          headerToolbar={{
            left: "",
            center: "title",
            right: "customPrev customNext",
          }}
          events={{
            googleCalendarId: process.env.CALENDAR_ID,
            className: "gcal-event",
          }}
          lazyFetching={true}
          selectAllow={true}
          dateClick={handleDateClick}
          eventClick={eventClicked}
        />

        <br />

        <Modal id="add-event-modal" className="mt-4" size="lg" show={showModal}>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Modal.Header>
              <Modal.Title id="book-now-modal">Book Now!</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form.Group className="mb-3">
                <Form.Label>Selected Date</Form.Label>
                <Form.Control
                  disabled
                  className="p-2"
                  placeholder={dayInfo.dateStr}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Services</Form.Label>
                <Select
                  required
                  id="services-select"
                  multiple
                  options={{
                    classes: "",
                    dropdownOptions: {
                      className: "text-black",
                      alignment: "left",
                      autoTrigger: true,
                      closeOnClick: true,
                      constrainWidth: true,
                      coverTrigger: true,
                      hover: false,
                      inDuration: 150,
                      outDuration: 250,
                    },
                  }}
                  value={dayInfo.summary}
                  onChange={handleSelectChange}
                >
                  <option disabled value="">
                    Select services
                  </option>
                  <option value={1}>Help me Package</option>
                  <option value={2}>Mock Interview</option>
                  <option value={3}>Resume Package</option>
                  <option value={4}>Find me a Job!</option>
                  <option value={5}>Portfolio Revamp</option>
                </Select>
                <p className="mb-3" style={{ color: "#c90048" }}>
                  {dayInfo.errors}
                </p>
              </Form.Group>

              <br />

              <Form.Group className="mb-3">
                <Form.Label>Start Time</Form.Label>
                <TimePicker
                  required
                  id="start-time"
                  start="08:00"
                  end="21:00"
                  step={30}
                  value={dayInfo.start.dateTime}
                  onChange={handleTimeStartChange}
                />
              </Form.Group>

              <br />

              {dayInfo.start.dateTime ? (
                <Form.Group className="mb-3">
                  <Form.Label>End Time</Form.Label>
                  <TimePicker
                    disabled
                    required
                    id="end-time"
                    start="09:00"
                    end="21:00"
                    step={30}
                    value={dayInfo.end.dateTime}
                  />
                </Form.Group>
              ) : (
                <p>Please select a start time</p>
              )}
            </Modal.Body>

            <Modal.Footer style={{ backgroundColor: "white" }}>
              <Row className="mx-2">
                <Col>
                  <Button className="red" onClick={modalHandler}>
                    Close
                  </Button>
                </Col>
                <Col>
                  <Button type="submit">Submit</Button>
                </Col>
              </Row>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </Layout>
  )
}

export default BookNowCalendar
