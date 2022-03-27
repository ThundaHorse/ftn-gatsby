import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import googleCalendarPlugin from "@fullcalendar/google-calendar"
import interactionPlugin from "@fullcalendar/interaction"
import ApiCalendar from "react-google-calendar-api"
import React, { useState, useRef } from "react"

const isBrowser = typeof window !== "undefined"

const FtnCalendar = props => {
  const [signedIn, setSignedIn] = useState(false)

  const calendarRef = useRef(null)

  const eventClicked = info => {
    info.jsEvent.preventDefault()

    if (isBrowser) {
      if (info.event.url) {
        window.open(info.event.url)
      }
    }
  }

  const handleDateClick = info => {
    if (signedIn) {
      props.calDayInfoHandler({
        ...props.dayInfo,
        dateStr: info.dateStr,
      })
      props.modalHandler(true)
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

  return (
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
      googleCalendarApiKey={process.env.GOOGLE_CALENDAR_API_KEY}
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
  )
}

export default FtnCalendar
