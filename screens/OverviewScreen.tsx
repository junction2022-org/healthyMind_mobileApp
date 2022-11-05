import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {RootTabScreenProps} from '../types';
import Calendar from "../components/Calendar";
import {useState} from "react";
import {IOverviewScreenProps} from "./api/IOverviewScreenProps";
import {Day} from "../domain/Day";

export default function OverviewScreen(navProps: RootTabScreenProps<'OverviewScreen'>) {

    let props: IOverviewScreenProps = navProps.route.params;

    const [date, setDate] = useState(new Date());

    return (
        <View style={styles.container}>

            <Calendar
                mode={'date'}
                value={date}
                onChange={(newDate: Date) => {
                    setDate(newDate);
                }}
                style={[styles.button, styles.calendarButton]}
            />

            <View style={styles.innerContainer}>
                <View style={styles.item}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            navProps.navigation.navigate("SleepModal", {});
                        }}
                    >
                        <Text>Sleep</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {

                            navProps.navigation.navigate("SleepModal", {});
                        }}
                    >
                        <Text>Diet</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            navProps.navigation.navigate("SleepModal", {});
                        }}
                    >
                        <Text>Activities</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.item}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            navProps.navigation.navigate("EmotionsModal", {});
                        }}
                    >
                        <Text>Emotions</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            navProps.navigation.navigate("SleepModal", {});
                        }}
                    >
                        <Text>Exposure</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            navProps.navigation.navigate("SleepModal", {});
                        }}
                    >
                        <Text>Interactions</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={[styles.button, styles.statusButton]}
                    onPress={() => {
                        navProps.navigation.navigate("SleepModal", {});
                    }}
                >
                    <Text>Status</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'baseline',
    },
    innerContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
    },
    item: {
        alignItems: 'center',
        width: '50%',
        paddingTop: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    button: {
        borderRadius: 10,
        alignItems: "center",
        alignContent: "center",
        textAlign: 'center',
        textAlignVertical: 'center',
        width: '75%',
        paddingVertical: 20,
        marginTop: 20,
        backgroundColor: "#DDDDDD",
    },
    statusButton: {
        width: '88%',
        marginHorizontal: 25,
    },
    calendarButton: {
        width: '100%',
        backgroundColor: '#dddddd',
    }
});
