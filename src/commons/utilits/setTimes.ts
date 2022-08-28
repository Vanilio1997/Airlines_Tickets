import { IResultFlyObject } from "../../types/types";
import { ISetTimesInterface } from "../../types/types";

const setMonth = (date:Date):string => {
    let  monthNum:number =  date.getMonth()
    const monthsArr =  ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек']

    return monthsArr[monthNum]
}

const setWeekDay = (date:Date):string => {
    let weekNum: number = date.getDay() 
    const weekArr = ['вс','пн','вт','ср','чт','пт','сб']
   
    return weekArr[weekNum]
} 

export const setTimes = (date:string):ISetTimesInterface => {
    const parsingDate = new Date(date)
    const dateObj = {day: 0, hour: 0, minutes: 0, weekDay: '', month: ''}
    
    dateObj.month = setMonth(parsingDate)
    dateObj.weekDay = setWeekDay(parsingDate)
    dateObj.day = parsingDate.getDate()
    dateObj.hour = parsingDate.getHours()
    dateObj.minutes = parsingDate.getMinutes()
    if(dateObj.minutes.toString().length === 1){
        dateObj.minutes = '0' + dateObj.minutes
    }

    return dateObj
}

export const flyDuration = (firstFly:number , secondFly:number):IResultFlyObject => {

    const fisrtFlyHours = Math.floor(firstFly/ 60);
    const fisrtFlyMinutes = (firstFly % 60);
    const secondFlyHours = Math.floor(secondFly / 60);
    const secondFlyMinutes = secondFly % 60;
    const firstFlyResult = `${fisrtFlyHours} ч ${fisrtFlyMinutes} мин`;
    const secondFlyResult = `${secondFlyHours} ч ${secondFlyMinutes} мин`;
    const resultFlyObject = {firstFlyResult, secondFlyResult}
    return resultFlyObject
}

export function parseFlyDuration(num:number):string {
	const hours = Math.floor(num / 60)
	const minutes = num % 60
	const result = `${hours} ч ${minutes} мин`
	return result
}


