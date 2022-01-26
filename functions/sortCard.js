export function sortCard(array) {
    array.sort((a, b) => a.startedAt > b.startedAt ? 1 : -1);
}
