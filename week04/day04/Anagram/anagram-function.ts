'use strict';

export class Anagram {

    isAnagram(stringA: string, stringB: string) {
        stringA.split('');
        stringB.split('');
        let arrayA: string[] = [];
        let arrayB: string[] = [];
        for (let i: number = 0; i < stringA.length; i++) {
            if (stringA[i] === ' ') {
                continue;
            }
            arrayA.push(stringA[i]);
            arrayA.sort();
        }
        for (let i: number = 0; i < stringB.length; i++) {
            if (stringB[i] === ' ') {
                continue;
            }
            arrayB.push(stringB[i]);
            arrayB.sort();
        }
        if (arrayA.length === arrayB.length) {
            for (let i: number = 0; i < arrayA.length; i++) {
                if (arrayA[i] === arrayB[i]) {
                    return true;
                } else {
                    return false;
                }
            }
        } else {
            return false;
        }
    };
}