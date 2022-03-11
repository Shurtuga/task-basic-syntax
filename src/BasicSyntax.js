'use strict';
export function romanToInteger(s) {
    let result = toRoman(s[s.length - 1]);
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    for (let i = s.length - 2; i >= 0; i--) {
        if (isGreater(s[i + 1], s[i])) {
            result -= toRoman(s[i]);
        } else result += toRoman(s[i]);
    }
    return result;
}

function toRoman(val) {
    switch (val) {
        case 'I':
            return 1;
        case 'V':
            return 5;
        case 'X':
            return 10;
        case 'L':
            return 50;
        case 'C':
            return 100;
        case 'D':
            return 500;
        case 'M':
            return 1000;
    }
}

let romanean = 'IVXLCDM';

function isGreater(sA, sB) {
    let indexA = -1;
    let indexB = -1;
    let i = 0;
    while (indexA == -1 || indexB == -1) {
        if (romanean[i] == sA[0]) {
            indexA = i;
        }
        if (romanean[i] == sB[0]) {
            indexB = i;
        }
        i++;
    }
    return indexA > indexB;
}
