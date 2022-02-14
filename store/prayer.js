export const state = () => {
    return Object.assign({
        alt_subuh: -20,
        alt_isya: -18,
        subuh: 2,
        dzuhur: 2,
        ashar: 2,
        maghrib: 2,
        isya: 2,
        terbit: -2,
    }, JSON.parse(localStorage.getItem('horison/prayer')) || {});
}

export const mutations = {
    change(state, config) {
        Object.assign(state, config);
        localStorage.setItem('horison/prayer', JSON.stringify(state));
    }
}