import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RoundButton from '../RoundButton';

const minutesToMilliseconds = (min) => min * 1000 * 60;
const formatMinutes = (min) => min < 10 ? `0${min}` : min;

const CountDown = ({ isPaused }) => {
    const [milliSecond, setMillisecond] = useState(minutesToMilliseconds(2));
    const interval = useRef(null);

    useEffect(() => {
        if (isPaused) {
            interval.current = setInterval(() => {
                setMillisecond((time) => {
                    if (time == 0) {
                        clearInterval(interval.current);
                        return time;
                    }

                    return time - 1000;
                })
            }, 1000)
        }


        return () => clearInterval(interval.current);
    }, [isPaused]);


    const minute = Math.floor(milliSecond / 1000 / 60) % 60;
    const second = Math.floor(milliSecond / 1000) % 60;

    return (
        <>
            <View style={styles.viewHours}>
                <Text style={styles.hours}>{`${formatMinutes(minute)}:${formatMinutes(second)}`}</Text>
            </View>
        </>
    )
}

export default CountDown;


const styles = StyleSheet.create({
    hours: {
        fontSize: 40,
        color: '#FFF'
    },
    viewHours: {
        padding: 50,
        borderRadius: 16,
        backgroundColor: 'rgba(94, 132, 226, 0.3)'
    }
});