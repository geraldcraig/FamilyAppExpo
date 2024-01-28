// import React, { useEffect } from 'react';
// import { View, StyleSheet, Image, Text, TouchableWithoutFeedback } from 'react-native';
// import * as Calendar from 'expo-calendar';
//
//
// function Calendar() {
//     useEffect(() => {
//         (async () => {
//             const { status } = await Calendar.requestCalendarPermissionsAsync();
//             if (status === 'granted') {
//                 // const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
//                 console.log('calender access granted');
//                 //  console.log({ calendars });
//             }
//         })();
//     }, []);
//
//     return (
//
//         <TouchableWithoutFeedback onPress={() => createCalendar()}>
//             <Text>  Add To Calendar </Text>
//         </TouchableWithoutFeedback>
//
//     );
// }
//
//
//
// async function getDefaultCalendarSource() {
//     const defaultCalendar = await Calendar.getDefaultCalendarAsync();
//     return defaultCalendar.source;
// }
//
//
//
// async function createCalendar(playdate,teamname,location) {
//     console.log(playdate);
//
//     const defaultCalendarSource =
//         Platform.OS === 'ios'
//             ? await getDefaultCalendarSource()
//             : { isLocalAccount: true, name: 'CalendarName' };
//     const newCalendarID = await Calendar.createCalendarAsync({
//         title: 'CalendarName',
//         color: 'red',
//         timeZone: "GMT+1",
//         status:Calendar.EventStatus.CONFIRMED,
//         entityType: Calendar.EntityTypes.EVENT,
//         sourceId: defaultCalendarSource.id,
//         source: defaultCalendarSource,
//         name: 'internalCalendarName',
//         ownerAccount: 'personal',
//         accessLevel: Calendar.CalendarAccessLevel.OWNER,
//     });
//
//     console.log(`Your new calendar ID is: ${newCalendarID}`);
//     alert(`Event saved in your Calendar.`);
//
// // creating event with calendar ID
//
//     let getcalid = newCalendarID;
//
//     const newevent = await Calendar.createEventAsync(getcalid,{
//         title: 'Event Name',
//         startDate: new Date('2022-09-17T15:00:00.000Z'),
//         endDate: new Date ('2022-09-17T15:00:00.000Z'),
//         timeZone: "GMT+1",
//         location: 'India',
//         alarms: [ {relativeOffset: -15}],
//         status:Calendar.EventStatus.CONFIRMED,
//         accessLevel: Calendar.CalendarAccessLevel.OWNER,
//     });
//
// }
//
// export default Calendar;