module.exports = {
    getCorrectRigNameFromNumber : num => {
    // eslint-disable-next-line default-case
    switch(num){
        case num < 7: 
            return `T1_R${ num + 1 }`;
        case num > 6 && num < 14:
            return `T2_R${ num + 1 }`;
        case num > 13 && num < 21:
           return `T3_R${ num + 1 }`;
        case num > 20 && num < 28:
            return `T4_R${ num + 1 }`;
        case num > 27 && num < 34:
            return `T5_R${ num + 1 }`;
        case num > 33 && num < 40:
            return `T6_R${ num + 1 }`;
        case num > 39 && num < 45:
            return `T7_R${ num + 1 }`;
        case num > 44 && num < 50:
            return `T8_R${ num + 1 }`;
        case num > 49 && num < 55:
            return `T9_R${ num + 1 }`;
        case num > 54 && num < 60:
            return `T10_R${ num + 1}`;
    };
    }
};