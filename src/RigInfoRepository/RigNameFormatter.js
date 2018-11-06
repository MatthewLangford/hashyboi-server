module.exports = {
    getCorrectRigNameFromNumber : num => {
    // eslint-disable-next-line default-case
    switch(true){
        case (num < 8): 
            return `T1_R${ num }`;
        case (num > 7 && num < 15):
            return `T2_R${ num }`;
        case (num > 14 && num < 22):
            return `T3_R${ num }`;
        case (num > 21 && num < 29):
            return `T4_R${ num }`;
        case (num > 28 && num < 35):
            return `T5_R${ num }`;
        case (num > 34 && num < 41):
            return `T6_R${ num }`;
        case (num > 40 && num < 46):
            return `T7_R${ num }`;
        case (num > 45 && num < 51):
            return `T8_R${ num }`;
        case (num > 50 && num < 56):
            return `T9_R${ num }`;
        case (num > 55 && num < 61):
            return `T10_R${ num }`;
        default:
            return num;
    }
    }
};