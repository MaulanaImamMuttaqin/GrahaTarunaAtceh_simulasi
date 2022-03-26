export default class Utility {
    static convertHMS(second) {
        function makeHumanReadable(num, singular) {
            return num > 0
                ? num + ` ${singular}, `
                : '';
        }
        const seconds = Math.floor(second % 60);
        const minutes = Math.floor((second % 3600) / 60);
        const hours = Math.floor((second % (3600 * 24)) / 3600);
        const secondsStr = makeHumanReadable(seconds, 'Detik');
        const minutesStr = makeHumanReadable(minutes, 'Menit');
        const hoursStr = makeHumanReadable(hours, 'Jam');
        return `${hoursStr}${minutesStr}${secondsStr}`.replace(/,\s*$/, '');
    }
    static GenerateID(length) {
        let digits = 10 ** length;
        let id = Math.floor(digits + Math.random() * 9 * digits);
        return `${id}`;
    }
    static $(id) {
        let element = document.querySelector(id);
        return element;
    }
}
