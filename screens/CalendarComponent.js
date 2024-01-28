// CalendarComponent.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Calendar, Agenda } from 'react-native-calendars';

const CalendarComponent = () => {
    const [events, setEvents] = useState({});

    const addEvent = (day) => {
        const date = day.dateString;
        const newEvent = {
            name: 'New Event',
            date: date,
        };

        setEvents((prevEvents) => ({
            ...prevEvents,
            [date]: [...(prevEvents[date] || []), newEvent],
        }));
    };

    const deleteEvent = (day, index) => {
        const date = day.dateString;
        const updatedEvents = { ...events };
        updatedEvents[date].splice(index, 1);

        setEvents(updatedEvents);
    };

    const renderEvent = (day) => {
        const date = day.dateString;
        const dayEvents = events[date] || [];

        return (
            <View>
                {dayEvents.map((event, index) => (
                    <TouchableOpacity key={index} onPress={() => deleteEvent(day, index)}>
                        <Text>{event.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    };

    return (
        <Agenda
            items={events}
            renderItem={(day) => renderEvent(day)}
            renderEmptyDate={() => <View />}
            onDayPress={(day) => addEvent(day)}
        />
    );
};

export default CalendarComponent;
