

export default class Utility {

    static convertHMS(second: number, format: string): string {
        function makeHumanReadable(num: number, singular: string): string {
            return num > 0
                ? num + singular
                : '';
        }

        const seconds = Math.floor(second % 60);
        const minutes = Math.floor((second % 3600) / 60);
        const hours = Math.floor((second % (3600 * 24)) / 3600);

        let secondsStr = ""
        let minutesStr = ""
        let hoursStr = ""

        switch (format) {
            case "verbose":
                secondsStr = makeHumanReadable(seconds, ' Detik ');
                minutesStr = makeHumanReadable(minutes, ' Menit, ');
                hoursStr = makeHumanReadable(hours, ' Jam, ');
                break;
            case "number":
                secondsStr = makeHumanReadable(seconds, '');
                minutesStr = makeHumanReadable(minutes, ':');
                hoursStr = makeHumanReadable(hours, ':');
                break;
        }
        return `${hoursStr}${minutesStr}${secondsStr}`.replace(/,\s*$/, '');
    }

    static getHourMinutes(seconds: number): { hours: number, minutes: number } {
        const minutes = Math.floor((seconds % 3600) / 60);
        const hours = Math.floor((seconds % (3600 * 24)) / 3600);
        return { hours, minutes }
    }

    static GenerateID(length: number): string {
        let digits = 10 ** length;
        let id = Math.floor(digits + Math.random() * 9 * digits);
        return `${id}`;
    }

    static copyToClipboard(content: string): void {
        navigator.clipboard.writeText(content);
    }

    static storage(command: string, name: string, data?: any): any | void {

        switch (command) {
            case "set":
                localStorage.setItem(name, JSON.stringify(data))
                break;
            case "get":
                let d = localStorage.getItem(name)
                return d ? JSON.parse(d) : null
            case "delete":
                localStorage.removeItem(name)

        }
    }

    static shuffleArray(array: any[]): any[] {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
        return array;
    }


    static roundNumber(num: number, scale: number): number {
        if (!("" + num).includes("e")) {
            return +(Math.round(parseFloat(num + "e+" + scale)) + "e-" + scale);
        } else {
            var arr = ("" + num).split("e");
            var sig = ""
            if (+arr[1] + scale > 0) {
                sig = "+";
            }
            return +(Math.round(parseFloat(+arr[0] + "e" + sig + (+arr[1] + scale))) + "e-" + scale);
        }
    }

    static convertToSecond(time: string): number {
        let times = time.split(":")
        let hours = parseInt(times[0]) * 3600
        let minutes = parseInt(times[1]) * 60

        return hours + minutes
    }

    static convertToHM(second: number): string {
        function makeHumanReadable(num: string, singular: string): string {
            return num + singular;
        }

        const minutes = Math.floor((second % 3600) / 60);
        const hours = Math.floor((second % (3600 * 24)) / 3600);

        let minutesStr = ""
        let hoursStr = ""


        minutesStr = makeHumanReadable(minutes > 10 ? String(minutes) : "0" + minutes, '');
        hoursStr = makeHumanReadable(hours > 10 ? String(hours) : "0" + hours, ':');
        return `${hoursStr}${minutesStr}`.replace(/,\s*$/, '');
    }


    static capToNum(char: string): number {
        return char.toUpperCase().charCodeAt(0) - 65
    }

    static numToLetter(num: number): string {
        return String.fromCharCode(64 + num);
    }



}
