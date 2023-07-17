"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValues = exports.getRules = void 0;
const cache = {};
let inited;
function handleRules(rules) {
    if (!rules) {
        return;
    }
    cache.rules = rules;
}
function handleValues(values) {
    if (!values) {
        return;
    }
    cache.values = values;
}
exports.default = ({ getRules, getValues }) => {
    if (inited) {
        return;
    }
    inited = true;
    const loadData = () => {
        getRules(handleRules);
        getValues(handleValues);
    };
    loadData();
    setInterval(loadData, 2000);
};
const getRules = () => {
    return cache.rules;
};
exports.getRules = getRules;
const getValues = () => {
    return cache.values;
};
exports.getValues = getValues;
