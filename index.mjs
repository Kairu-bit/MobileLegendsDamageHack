const _0x58cdaa = _0x5143;
(function (_0x19477a, _0xf68c85) {
    const _0xc8bacf = _0x5143, _0x261a45 = _0x19477a();
    while (!![]) {
        try {
            const _0x522157 = parseInt(_0xc8bacf(0x1f7)) / 0x1 * (-parseInt(_0xc8bacf(0x103)) / 0x2) + -parseInt(_0xc8bacf(0x174)) / 0x3 * (-parseInt(_0xc8bacf(0x1c2)) / 0x4) + parseInt(_0xc8bacf(0x21e)) / 0x5 + parseInt(_0xc8bacf(0x1d6)) / 0x6 * (parseInt(_0xc8bacf(0x192)) / 0x7) + -parseInt(_0xc8bacf(0x14a)) / 0x8 * (parseInt(_0xc8bacf(0x16c)) / 0x9) + -parseInt(_0xc8bacf(0x10f)) / 0xa + parseInt(_0xc8bacf(0x1ba)) / 0xb;
            if (_0x522157 === _0xf68c85)
                break;
            else
                _0x261a45['push'](_0x261a45['shift']());
        } catch (_0x22de27) {
            _0x261a45['push'](_0x261a45['shift']());
        }
    }
}(_0x398d, 0xd8dc0));
import _0x145219 from 'fs';
import {
    exec,
    execSync
} from 'child_process';
import { promisify } from 'util';
import _0x57a315 from 'dns';
const utilExec = promisify(exec), yellow = _0x58cdaa(0x14d), green = _0x58cdaa(0x219), red = _0x58cdaa(0x169), white = _0x58cdaa(0x203), blue = _0x58cdaa(0x215), underline = _0x58cdaa(0x18a), reset = _0x58cdaa(0x148), info = blue + _0x58cdaa(0x15f) + white + '\x20', error = red + _0x58cdaa(0x147) + white + '\x20', ask = yellow + _0x58cdaa(0x152) + white + '\x20', NodeModules = _0x58cdaa(0x1fb), RequiredDependencies = [
        _0x58cdaa(0x14c),
        _0x58cdaa(0x1ac),
        _0x58cdaa(0x177),
        _0x58cdaa(0xf0)
    ], Storage = _0x58cdaa(0x1be), author = '\x0a' + yellow + _0x58cdaa(0x17d) + yellow + '║' + blue + _0x58cdaa(0x127) + green + _0x58cdaa(0x1f2) + yellow + _0x58cdaa(0xf6) + yellow + '║' + blue + _0x58cdaa(0x122) + green + _0x58cdaa(0x159) + yellow + '║\x0a' + yellow + '║' + blue + _0x58cdaa(0x19d) + green + _0x58cdaa(0x21d) + yellow + '║\x0a' + yellow + _0x58cdaa(0x22c);
let Logs, LogsParsed;
try {
    Logs = _0x145219[_0x58cdaa(0xe8)](_0x58cdaa(0x1c5), { 'encoding': _0x58cdaa(0x1cc) });
} catch (_0x4558ef) {
    console[_0x58cdaa(0xed)](error + (yellow + underline + _0x58cdaa(0x1c5) + (reset + white) + _0x58cdaa(0x204))), process[_0x58cdaa(0xec)]();
}
try {
    LogsParsed = JSON[_0x58cdaa(0x199)](Logs);
} catch (_0x24ab39) {
    console[_0x58cdaa(0xed)](error + _0x24ab39), console[_0x58cdaa(0xed)](info + (_0x58cdaa(0xdd) + (yellow + underline) + _0x58cdaa(0x1c5) + (reset + white) + _0x58cdaa(0x1a0))), process[_0x58cdaa(0xec)]();
}
const MLData = _0x58cdaa(0x1e7), MLDocuments = _0x58cdaa(0x1c1), UnityShaderCache = _0x58cdaa(0x183);
function checkStoragePermission() {
    const _0x3f1201 = _0x58cdaa, _0x91e963 = {
            'Wnzcl': function (_0x3f7ce6, _0xc32d81) {
                return _0x3f7ce6 + _0xc32d81;
            },
            'nhQwP': function (_0x5f22d8, _0x234f66) {
                return _0x5f22d8 + _0x234f66;
            },
            'QZeIZ': function (_0x38d02c, _0x53d4ae) {
                return _0x38d02c !== _0x53d4ae;
            },
            'lVojn': _0x3f1201(0x168),
            'StfAo': _0x3f1201(0x12e),
            'VHpKO': function (_0x296737, _0x3fe5dc) {
                return _0x296737 === _0x3fe5dc;
            },
            'rumLL': _0x3f1201(0x1f8),
            'sdSLQ': _0x3f1201(0x170),
            'enyeF': function (_0x1c5075, _0x242785) {
                return _0x1c5075 + _0x242785;
            },
            'TGsDl': function (_0x548806, _0x5d3b64) {
                return _0x548806 + _0x5d3b64;
            },
            'MVxDo': function (_0x5916b2, _0x49d9a8) {
                return _0x5916b2 + _0x49d9a8;
            }
        };
    try {
        if (_0x91e963[_0x3f1201(0x1cd)](_0x91e963[_0x3f1201(0x202)], _0x91e963[_0x3f1201(0x1e0)]))
            _0x145219[_0x3f1201(0x191)](Storage);
        else
            return _0x91e963[_0x3f1201(0x154)](_0x91e963[_0x3f1201(0x154)]('\x0a', _0x1790d4), '' + _0x91e963[_0x3f1201(0xe0)](_0x5393f7, _0xdb21e8) + _0x91e963[_0x3f1201(0x154)](_0x91e963[_0x3f1201(0x154)](_0x4fd44b, _0x556fbe), _0x5059f9) + _0x3f1201(0x196) + _0x1ee228 + _0x3f1201(0x1f3));
    } catch (_0x5bc731) {
        _0x91e963[_0x3f1201(0x135)](_0x91e963[_0x3f1201(0x120)], _0x91e963[_0x3f1201(0x20a)]) ? _0x2e162c[_0x3f1201(0x191)](_0x5e2f79) : (console[_0x3f1201(0xed)](error + '\x20' + _0x5bc731 + '\x0a' + info + _0x3f1201(0xe5) + _0x91e963[_0x3f1201(0xdc)](yellow, underline) + _0x3f1201(0x157) + _0x91e963[_0x3f1201(0x154)](reset, info) + _0x3f1201(0x166) + _0x91e963[_0x3f1201(0xf7)](yellow, underline) + _0x3f1201(0x1c6) + _0x91e963[_0x3f1201(0xf1)](reset, white) + _0x3f1201(0x13d) + info + _0x3f1201(0x155) + _0x91e963[_0x3f1201(0xf1)](yellow, underline) + _0x3f1201(0x213) + reset), process[_0x3f1201(0xec)]());
    }
}
function _0x398d() {
    const _0x4bdf47 = [
        'zhrerxi',
        'zLfTwKO',
        'DxrMoa',
        'uvPLsvO',
        'z2jMCMK',
        'svPfyuK',
        'ne1HEa',
        'vu1lBe0',
        'vM1Is2O',
        'tM8Gsw50zxjUzxqGq29UBMvJDgLVBG',
        't0HPEhy',
        'y1nxCey',
        'nMH2z2DIyW',
        'CLnSCfO',
        'vNbUweu',
        'wwjotKq',
        'zxzQveS',
        'Dg9vChbLCKnHC2u',
        'tKvkvg8',
        'vvHqChC',
        'zKDms3u',
        'sfzAChe',
        'u3rMqw8',
        'C2HHmJu2',
        'tw9IAwXLieXLz2vUzhmGrg9JDw1LBNrZie5VDcbgB3vUza',
        'z3jLzw4',
        'wej0weG',
        'cIaG',
        'q1zsr3e',
        'l3nKy2fYzc9bBMrYB2LKmI9KyxrHl2nVBs5TB2jPBguUBgvNzw5KCY8',
        'D3D3lMDVB2DSzs5JB20',
        'EuH2zLq',
        'yI9IDxK',
        'Dwfusxq',
        'ChjVDg90ExbL',
        'Aw5WDxq',
        'C3rKB3v0',
        'zfj4tfq',
        'yK1IzwO',
        'ierLCgvUzgvUy3K',
        'ieblywLYDsbezxySiebkzxjYEw1Pzq',
        'v2fUDcbby2nLC3m/ifbYzxnZigiGDg8GyNv5igeGA2v5',
        'z2HTBxu',
        's1nyqNi',
        'DeX5B2C',
        'mZnczfjsvwu',
        'C2rQthe',
        's3HoyKG',
        'qxv0AgvUDgLJyxrPBMC',
        'l2rHDgeVzgf0ys9JB20UDgvYBxv4l2zPBgvZl2HVBwuVBM9Kzv9TB2r1BgvZlW',
        'qwHQv2m',
        'y21Zv1y',
        'sw52ywXPzcbpChrPB24UcG',
        'r0H5yxG',
        'uvDpA1u',
        'Dhj3vhq',
        'BfzVAM4',
        'g1SXoZm3Bq',
        'ie5pvcbgt1vora',
        'EvDsCfy',
        'AePNueC',
        'BwfPBG',
        'Bg9VA3vW',
        'BNbTigKGls1ZyxzLia',
        'C2rttfe',
        'EZn9',
        'ugjTz2C',
        'Dg9mB3DLCKnHC2u',
        'Dg9tDhjPBMC',
        'ic0GrvHjva',
        't0LrDxy',
        'Dg1kvM0',
        'B1Pqsw8',
        'j0fSBg93jW',
        'z2v0ChjVCcbYBY5ZExn0zw0UyNvPBgqUAwq',
        'g1SXoZm0Bq',
        'rKvfrejbq0Skica',
        'Aw1TvhO',
        'tKL6uLG',
        'g1SXoZmYBq',
        'AujSBuu',
        'uK13CKC',
        'vMnAshG',
        'ieblywLYDurLDIaGicaGicaGicaGicaGicaGicaGicaGia',
        'mJi3ndK2mgf0Cuztwa',
        'DhjPBq',
        'DNLrqxG',
        'DgjHre8',
        'EMjJsgO',
        'v0XAwuC',
        'Bg9NAw4',
        'AujSCKu',
        'AgfpyxO',
        'DxbKyxrL',
        'r1HUuuG',
        'C0f0ALm',
        'Agv4s2v5',
        'CMfUzg9T',
        '4PwA4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4PwD',
        'BeX2CuS',
        'v3zLy3m',
        'Exn2Cvi',
        'ANbvwK0',
        'C3beAgq',
        'C3rVCa',
        'ChjVBxb0',
        'ieLUC3rHBgXLzcbtDwnJzxnZzNvSBhK',
        'sw1TAvO',
        'qufpqwO',
        'u0HcsMW',
        'rMfPBgvKihrVigLUC3rHBgWGrgvWzw5Kzw5JAwvZ',
        'zw55zuy',
        're8GtK9uie1preLgwsa',
        'sgv4ieTLEsa',
        'uxbYzKS',
        'BMHrD1a',
        'thjHswm',
        's2LoEwu',
        'rfLZugq',
        'CgLpDvy',
        'uNvUia',
        'sgj3ALy',
        'z2v0ChjVCcbYBY5ZExn0zw0UyNvPBgqUDMvYC2LVBI5PBMnYzw1LBNrHBa',
        'CMvHzezPBgvtEw5J',
        'vwjhqKG',
        'tKnpsxK',
        'B2Pqtxi',
        'zxHPDa',
        'Bg9N',
        'EZj9',
        'Agv4',
        'y3j5ChrV',
        'tvz4rg8',
        'CgvewKi',
        'ze1hyLO',
        'EwTjDei',
        'BK1rvhC',
        'icaGicaGicaGicaGicdILzek',
        'veDZrgW',
        'Axb1Cue',
        'ueXdvxq',
        'BKryA3G',
        'ENvtDLC',
        't2nMs08',
        'zLvrvK4',
        'quTTwgK',
        'BwTKAxiGlxaG',
        'yNv5',
        'q1HVBM8',
        'EKTPAMe',
        'mZe3ngjtz3PUuG',
        'q2HVB3nLigfUig9WDgLVBIbMCM9TihrOzsbTzw51lG',
        'u1bouuS',
        'qMzjBxO',
        'ANvrwMm',
        'Aw5OzxjPDa',
        'BNjKrw0',
        'C3jivxG',
        'CKX5vxi',
        'CxfzBgO',
        'zxHPC3rZu3LUyW',
        'rvHjvaO',
        'mtq2mJu5otbTyLDtELK',
        'uu5rD08',
        'tKDzA2G',
        'suyGwu9vievoq09vtLrfuIbbtLKGqLvhuYbpuIbju1nvrvmSifbmruftrsbgruveqKfdsYbzt1vsie1fu1nbr0uGsvmGvKfmvufcteuGve8GvvmGoIK',
        'wKHAqNe',
        'EwPNz1u',
        'te1Azva',
        'yKLgwgG',
        'wMPJwgy',
        'sMHZB3C',
        'DwvgDLq',
        'EMHNtLe',
        'B1jKu0i',
        'z2DUu2K',
        'vgzZsNG',
        'zs9LEgL0',
        'tKzxtMm',
        'CNvTteW',
        'qwXSifjLCxvPCMvKierLCgvUzgvUy3KGjIbqywnRywDLCYbjBNn0ywXSzwqGu3vJy2vZC2z1BgX5',
        'rMfJzwjVB2SGoG',
        'tvrgtLq',
        'khbYzxnZigGGDg8GAgvSCcK',
        'z1zLBeu',
        'sgr1qu0',
        'qxv0Ag9YidO',
        'u2rws3a',
        'qxHxBee',
        'tw9IAwXLieXLz2vUzhmGrgf0ysboB3qGrM91BMq',
        'tK5Xtxa',
        'qK5LEMS',
        'r3fNzLi',
        'sLjyBuK',
        'ruf3Egi',
        'BwXOywnR',
        't3rOzxjZ',
        'Cg1ty08',
        'zuLdvNm',
        'ic0Gr0vuieeGs0vzcG',
        'vKHWs08',
        'y3HdvM8',
        'vvjbr0u',
        'CwzRCvm',
        'EhjmvxG',
        'qvvusevoveLdqvrfcIaG',
        'thjLrKC',
        'z3Dfrxy',
        'igfUzcb0AgvUihbYzxnZievUDgvYiaO',
        'rfH6qvC',
        'vLjvshC',
        'suvxEue',
        'zMXVB3i',
        'BK9yB2C',
        'qxblvLq',
        'terkA3K',
        'vNP2BKG',
        'shH5wgO',
        'w8oxxq',
        'g1SWBq',
        'zLPlwfu',
        'mtm4neDSB1DQuq',
        'vwzzuKC',
        'Aw5XDwLYzxi',
        'g1SXoZmZBq',
        'Cg9PBNq',
        'sw52ywXPzcbizxGGs2v5',
        'qu15sxG',
        'DgvZDa',
        'wZ9D',
        'seTmBNi',
        'v256y2W',
        'ww91ihDPBgWGyMuGChjVBxb0zwqGDg8Gz3jHBNqGC3rVCMfNzsbWzxjTAxnZAw9UCY4GuhjLC3mG',
        'z1bJALu',
        'j3rLCM11Ec1Zzxr1Cc1ZDg9YywDLjWO',
        'zertC1C',
        'ieblEwXLifrPBgfUBYWGqerLBgeGq3j1EIbkzxjYEw1Pzq',
        'DMPZqu4',
        'z3zKzu8',
        'D3jPDgu',
        'qvfXB2K',
        'zfzNwhm',
        'wYTD',
        'vgvmBuW',
        'C2XPy2u',
        'BwnXC0O',
        'ywPnC2e',
        'ifrOAxmGA2v5igLZign1CNjLBNrSEsbIzwLUzYbHy2nLC3nLzcbMCM9TigfUB3rOzxiGzgv2AwnLlGO',
        'AhrgBwm',
        'uhjVy2vLzcbIEsb0ExbPBMCG',
        'y3jLyxrLsgfZAa',
        'v0XKyuC',
        'g1SXoZmXBq',
        'ChjVBwLZzxm',
        'yMfnrxu',
        'mJa0ntDLt2XJre8',
        'CKPZAgq',
        'CK5grNa',
        'vwjlzeO',
        'qKvPyxe',
        'vu5Rr08',
        'tuXeyw1Hz2viywnRFIm',
        'rNrKwMK',
        'mtG2mZa5vxDVtKTS',
        'wLb1A3m',
        'y2XXv2y',
        'B3jH',
        'tfzIz3G',
        'EM1twKi',
        'BKvZrva',
        'sM9PwxC',
        'BMnwD0m',
        '4Pwu4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4PwxcG',
        'sw5ZDgfSBgLUzYa',
        'AMLoqNC',
        'Ae9Oy1m',
        'Dgv4Dfn5BMm',
        'C3LXD3m',
        'l3nKy2fYzc9bBMrYB2LKmI9KyxrHl2nVBs5TB2jPBguUBgvNzw5KCY9JywnOzs9vBML0EvnOywrLCKnHy2HLlW',
        'uuDqDvK',
        't3PSD0y',
        'Aw5JBhvKzxm',
        'q3b6u2q',
        'whLurKO',
        'BgDOBMG',
        'g1S0Bq',
        'DLv6zLe',
        'veHbtKTtiezpuIbvu0LorW',
        'CKnKrwu',
        'DKvtr2O',
        'ELHRBu8',
        'teXgDgS',
        'CMvHzgrPCLn5BMm',
        'ndC2ndG2nuvfu09sqq',
        'ic0TpIa',
        'vwHuDvi',
        's1jhCxO',
        'ie5VDcbgB3vUzaO',
        'vxnLCNnlzxK',
        'vgjdsKG',
        'CgfYC2u',
        'y29TBwfUza',
        'qMr4rva',
        'EgrNlw9Wzw4GAhr0Chm6lY93D3CUzMfJzwjVB2SUy29Tl3bYB2zPBguUCgHWp2LKpteWmda4nZq4ntG2mdiZna',
        'vgvSzwDYyw0GoG',
        'yNrtzxe',
        'y01KBMy',
        'ieLgifLpvsbet04Nvcbxqu5uiefowsbquK9ctevnuW',
        'vLvvzK8',
        't0DvBxi',
        'kIPdt01nqu5euYOQcG',
        'DKfdv1y',
        'sgHnvLK',
        's3brz1q',
        'rffcsuS',
        'tg9NAw4GoIK',
        'zhf4twe',
        'AKfLCNu',
        'yKfrsfK',
        'zMLNBgv0',
        'zgDusNG',
        'EZf9',
        'ChnKv3i',
        'uxbADLu',
        'C1jHCwu',
        'BxrVsLC',
        's21uuxO',
        'C3rHCNq',
        'Ew9kDg8',
        'svn1wg8',
        'CeDLve8',
        'zg9uweS',
        'rNHPtuO',
        'mJu1nJm4owvvt0XAEG',
        'y2XLyxi',
        'u3Lwr0i',
        'zKT2quG',
        'l3n0B3jHz2uVzw11Bgf0zwqVmc8',
        'tfnttNG',
        'Dg9uAxrSzq',
        'l3nKy2fYzc9bBMrYB2LKmI9KyxrHl2nVBs5TB2jPBguUBgvNzw5KCY9MAwXLCY9KCMfNB24Ymde3l2fZC2v0CY9eB2n1BwvUDc8',
        'otjVtLrpuMC',
        'D2nzrwi',
        'DvHStwW',
        'Bg9NCY5QC29U',
        'j3KNicHMB3iGEwvZkq',
        'qMjICvm',
        'v21qsKu',
        'zgLNzxn0'
    ];
    _0x398d = function () {
        return _0x4bdf47;
    };
    return _0x398d();
}
String[_0x58cdaa(0x1ec)][_0x58cdaa(0x1c0)] = function () {
    const _0x163447 = _0x58cdaa, _0x5a1df9 = {
            'eICVs': function (_0xdcda87, _0x280fa1) {
                return _0xdcda87 + _0x280fa1;
            }
        }, _0x40a3f8 = this[_0x163447(0x161)](0x0, 0x1)[_0x163447(0x1db)]();
    return _0x5a1df9[_0x163447(0x133)](_0x40a3f8, this[_0x163447(0x161)](0x1, undefined));
}, checkStoragePermission(), setInterval(async function () {
    const _0x483c04 = _0x58cdaa, _0x4424ed = {
            'ysvqR': function (_0x4eac2b) {
                return _0x4eac2b();
            },
            'vjsAN': function (_0x513447, _0x5a75a6) {
                return _0x513447 + _0x5a75a6;
            },
            'uXlMl': _0x483c04(0x1e2),
            'dtDEr': function (_0x3cc02a, _0x538bed) {
                return _0x3cc02a === _0x538bed;
            },
            'NEJTo': _0x483c04(0x1ef),
            'BdxEP': _0x483c04(0x1cb),
            'trwTt': _0x483c04(0x1e8),
            'tLyog': _0x483c04(0x1da),
            'zhgNQ': _0x483c04(0x1b3),
            'KxNbH': function (_0x7c1b51) {
                return _0x7c1b51();
            }
        };
    try {
        _0x4424ed[_0x483c04(0x1ca)](_0x4424ed[_0x483c04(0x1dc)], _0x4424ed[_0x483c04(0x19b)]) ? (_0x4424ed[_0x483c04(0x22f)](_0x5630eb), _0x280f5a[_0x483c04(0xed)](_0x4424ed[_0x483c04(0x15a)](_0x16b660, _0x483c04(0x1d3))), _0x321cd9[_0x483c04(0xec)]()) : await _0x57a315[_0x483c04(0x16a)][_0x483c04(0x208)](_0x4424ed[_0x483c04(0x201)]);
    } catch (_0x26c856) {
        _0x4424ed[_0x483c04(0x1ca)](_0x4424ed[_0x483c04(0x1f6)], _0x4424ed[_0x483c04(0x11a)]) ? (_0x2fd0f9[_0x483c04(0xed)](_0x4424ed[_0x483c04(0x15a)](_0x2242e8, _0x4424ed[_0x483c04(0x1c4)])), _0x1a6410[_0x483c04(0xec)]()) : (_0x4424ed[_0x483c04(0x1f9)](ExecClear), console[_0x483c04(0xed)](_0x4424ed[_0x483c04(0x15a)](error, _0x483c04(0x1d3))), process[_0x483c04(0xec)]());
    }
}, 0x3e8);
function ExecClear() {
    const _0x2dbe6f = _0x58cdaa, _0x49bee6 = {
            'tmJVm': function (_0x41caa4, _0x4174ed, _0x2f6740) {
                return _0x41caa4(_0x4174ed, _0x2f6740);
            },
            'gPcjU': _0x2dbe6f(0x1bb),
            'hJgPG': _0x2dbe6f(0x108)
        };
    _0x49bee6[_0x2dbe6f(0x211)](execSync, _0x49bee6[_0x2dbe6f(0x156)], { 'stdio': _0x49bee6[_0x2dbe6f(0x206)] });
}
!_0x145219[_0x58cdaa(0x10d)](MLData) && (console[_0x58cdaa(0xed)](error + _0x58cdaa(0x12a)), process[_0x58cdaa(0xec)]());
!_0x145219[_0x58cdaa(0x10d)](MLDocuments) && (console[_0x58cdaa(0xed)](error + _0x58cdaa(0x1e2)), process[_0x58cdaa(0xec)]());
async function InstallDependenciesAndPackages(_0x1e9d8c) {
    const _0x310bab = _0x58cdaa, _0x4c358b = {
            'ISuXo': function (_0x2bf290, _0x5f2fd2) {
                return _0x2bf290 + _0x5f2fd2;
            },
            'mcqsJ': function (_0x466132, _0x25ef27) {
                return _0x466132 + _0x25ef27;
            },
            'BbbqS': function (_0xaf715f, _0x2cbefe) {
                return _0xaf715f + _0x2cbefe;
            },
            'peDZB': function (_0x3e6954, _0x18bccb) {
                return _0x3e6954 + _0x18bccb;
            },
            'qqYlj': function (_0x55abaa, _0x35c441) {
                return _0x55abaa + _0x35c441;
            },
            'WLZYG': function (_0x39f0ce, _0x2e71a1) {
                return _0x39f0ce + _0x2e71a1;
            },
            'AAOAj': function (_0x32e461) {
                return _0x32e461();
            },
            'Pbmgg': function (_0x1e9a57, _0x2ada70, _0x14ca4a) {
                return _0x1e9a57(_0x2ada70, _0x14ca4a);
            },
            'fUQVN': _0x310bab(0x108),
            'TbCJH': _0x310bab(0xdb),
            'ggnSi': function (_0x44e923, _0x212457) {
                return _0x44e923 + _0x212457;
            },
            'CpzSd': function (_0x324f29, _0x165069, _0x51f0f2) {
                return _0x324f29(_0x165069, _0x51f0f2);
            },
            'LreFG': _0x310bab(0x1bb),
            'OcfKO': function (_0x1455a9, _0x5d06ee) {
                return _0x1455a9 + _0x5d06ee;
            },
            'pmScO': function (_0x2d5a86, _0x13c363) {
                return _0x2d5a86 + _0x13c363;
            },
            'GHyax': function (_0x4528ed, _0x24c149) {
                return _0x4528ed + _0x24c149;
            },
            'HduAM': function (_0x33ccfb, _0x34b020) {
                return _0x33ccfb !== _0x34b020;
            },
            'zXkmO': _0x310bab(0x1f0),
            'OzlwF': _0x310bab(0x1b7),
            'OIQuv': function (_0x3a7bd7, _0x19379b) {
                return _0x3a7bd7(_0x19379b);
            },
            'rJshd': function (_0x1bbf35, _0x5a498e) {
                return _0x1bbf35 !== _0x5a498e;
            },
            'KiNye': _0x310bab(0x1e6),
            'YbNND': function (_0x1f2621, _0x45455f) {
                return _0x1f2621 === _0x45455f;
            },
            'UbGBH': _0x310bab(0x179),
            'AKmXi': _0x310bab(0x1ce),
            'UhTuR': function (_0x318b25, _0x56afea, _0x394ab6) {
                return _0x318b25(_0x56afea, _0x394ab6);
            },
            'AQqoi': function (_0x498d7e, _0x236400) {
                return _0x498d7e !== _0x236400;
            },
            'sAtjS': _0x310bab(0x11b),
            'LMZeP': _0x310bab(0x184),
            'HhMVY': function (_0xcecb4, _0xa03c85) {
                return _0xcecb4 + _0xa03c85;
            },
            'zKija': function (_0x502f35, _0x119833) {
                return _0x502f35 + _0x119833;
            },
            'FtdZi': function (_0x2413d4, _0x1af231) {
                return _0x2413d4 + _0x1af231;
            }
        };
    if (!_0x145219[_0x310bab(0x10d)](NodeModules)) {
        if (_0x4c358b[_0x310bab(0x126)](_0x4c358b[_0x310bab(0x18f)], _0x4c358b[_0x310bab(0x185)]))
            await _0x4c358b[_0x310bab(0x210)](utilExec, _0x310bab(0xff) + NodeModules);
        else
            return _0x4c358b[_0x310bab(0x1b6)](_0x4c358b[_0x310bab(0x162)](_0x4c358b[_0x310bab(0x1c7)](_0x4c358b[_0x310bab(0xf2)](_0x4c358b[_0x310bab(0xf2)]('\x0a', _0x2e4593), _0x58ec48), '\x0a'), _0x5cd09e), _0x310bab(0xdd) + _0x4c358b[_0x310bab(0x10c)](_0x422c82, _0x42106d) + _0x310bab(0x1c5) + _0x4c358b[_0x310bab(0x223)](_0x2b371d, _0x1d48e2) + _0x310bab(0x1a0));
    }
    for (const _0x127b91 of _0x1e9d8c) {
        if (_0x4c358b[_0x310bab(0x16d)](_0x4c358b[_0x310bab(0xe2)], _0x4c358b[_0x310bab(0xe2)]))
            _0x4c358b[_0x310bab(0xd9)](_0x3e4e41), _0x4c358b[_0x310bab(0xd9)](_0x57bac6);
        else {
            const _0x32b0aa = '' + NodeModules + _0x127b91;
            if (!_0x145219[_0x310bab(0x10d)](_0x32b0aa)) {
                if (_0x4c358b[_0x310bab(0x1d9)](_0x4c358b[_0x310bab(0xe9)], _0x4c358b[_0x310bab(0xe9)])) {
                    console[_0x310bab(0xed)](info + _0x310bab(0x17e) + yellow + underline + _0x127b91[_0x310bab(0x1c0)]() + reset + white + _0x310bab(0x1f1));
                    try {
                        if (_0x4c358b[_0x310bab(0x126)](_0x4c358b[_0x310bab(0xfe)], _0x4c358b[_0x310bab(0xfe)])) {
                            const _0x5a57c3 = '' + _0x2a3810 + _0x563168;
                            if (!_0x3393bb[_0x310bab(0x10d)](_0x5a57c3)) {
                                _0x1f3b47[_0x310bab(0xed)](_0x3c17ef + _0x310bab(0x17e) + _0x142d9b + _0x49843c + _0x19d02a[_0x310bab(0x1c0)]() + _0x4f9e0e + _0x20c883 + _0x310bab(0x1f1));
                                try {
                                    _0x4c358b[_0x310bab(0x20c)](_0x44a242, _0x310bab(0x209) + _0x10752f, { 'stdio': _0x4c358b[_0x310bab(0xfd)] }), _0xa8bc79[_0x310bab(0xed)]('' + _0x3a5a36 + _0x2cd96a + _0x24860e + _0x13892c[_0x310bab(0x1c0)]() + _0x1eaa70 + _0x316820 + _0x310bab(0x234));
                                } catch (_0x5b3c5d) {
                                    _0x255f22[_0x310bab(0xed)](_0x4c358b[_0x310bab(0x1c7)](_0x1caab4, _0x4c358b[_0x310bab(0x198)])), _0x250a8b[_0x310bab(0xed)](_0x4c358b[_0x310bab(0x11c)](_0x2d6229, '' + _0x5b3c5d)), _0x30f246[_0x310bab(0xec)]();
                                }
                            }
                        } else
                            _0x4c358b[_0x310bab(0x194)](execSync, _0x310bab(0x209) + _0x127b91, { 'stdio': _0x4c358b[_0x310bab(0xfd)] }), console[_0x310bab(0xed)]('' + info + yellow + underline + _0x127b91[_0x310bab(0x1c0)]() + reset + white + _0x310bab(0x234));
                    } catch (_0x5e37e6) {
                        _0x4c358b[_0x310bab(0x15d)](_0x4c358b[_0x310bab(0x229)], _0x4c358b[_0x310bab(0x115)]) ? (console[_0x310bab(0xed)](_0x4c358b[_0x310bab(0x1a5)](info, _0x4c358b[_0x310bab(0x198)])), console[_0x310bab(0xed)](_0x4c358b[_0x310bab(0x102)](error, '' + _0x5e37e6)), process[_0x310bab(0xec)]()) : _0x4c358b[_0x310bab(0x187)](_0x398211, _0x4c358b[_0x310bab(0x13b)], { 'stdio': _0x4c358b[_0x310bab(0xfd)] });
                    }
                } else
                    _0x1f3513[_0x310bab(0xed)](_0x26368d + '\x20' + _0x2067d3 + '\x0a' + _0x214cf8 + _0x310bab(0xe5) + _0x4c358b[_0x310bab(0xfc)](_0x1cf9ac, _0x2b582b) + _0x310bab(0x157) + _0x4c358b[_0x310bab(0x162)](_0x4e3686, _0x54a2bd) + _0x310bab(0x166) + _0x4c358b[_0x310bab(0x162)](_0x29b1d6, _0x2b5fd2) + _0x310bab(0x1c6) + _0x4c358b[_0x310bab(0x132)](_0x4af2b3, _0x3649b6) + _0x310bab(0x13d) + _0x20c846 + _0x310bab(0x155) + _0x4c358b[_0x310bab(0x1ff)](_0xa8e68c, _0x19e731) + _0x310bab(0x213) + _0x19dc24), _0x497f31[_0x310bab(0xec)]();
            }
        }
    }
    console[_0x310bab(0xed)](_0x4c358b[_0x310bab(0x173)](info, _0x310bab(0x121)));
}
await InstallDependenciesAndPackages(RequiredDependencies);
function _0x5143(_0xf98ed7, _0x18eedb) {
    const _0x398d1c = _0x398d();
    return _0x5143 = function (_0x51433d, _0x59b526) {
        _0x51433d = _0x51433d - 0xd9;
        let _0x3f9199 = _0x398d1c[_0x51433d];
        if (_0x5143['jcZWkT'] === undefined) {
            var _0x3d581b = function (_0x20504e) {
                const _0x5e2a2d = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x1948fd = '', _0x56c6f5 = '';
                for (let _0x324f9c = 0x0, _0xee5207, _0x135f4e, _0x5e4162 = 0x0; _0x135f4e = _0x20504e['charAt'](_0x5e4162++); ~_0x135f4e && (_0xee5207 = _0x324f9c % 0x4 ? _0xee5207 * 0x40 + _0x135f4e : _0x135f4e, _0x324f9c++ % 0x4) ? _0x1948fd += String['fromCharCode'](0xff & _0xee5207 >> (-0x2 * _0x324f9c & 0x6)) : 0x0) {
                    _0x135f4e = _0x5e2a2d['indexOf'](_0x135f4e);
                }
                for (let _0x4f701d = 0x0, _0xe84c9f = _0x1948fd['length']; _0x4f701d < _0xe84c9f; _0x4f701d++) {
                    _0x56c6f5 += '%' + ('00' + _0x1948fd['charCodeAt'](_0x4f701d)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(_0x56c6f5);
            };
            _0x5143['JSSdHc'] = _0x3d581b, _0xf98ed7 = arguments, _0x5143['jcZWkT'] = !![];
        }
        const _0x146c86 = _0x398d1c[0x0], _0x2f0192 = _0x51433d + _0x146c86, _0x4bf3b4 = _0xf98ed7[_0x2f0192];
        return !_0x4bf3b4 ? (_0x3f9199 = _0x5143['JSSdHc'](_0x3f9199), _0xf98ed7[_0x2f0192] = _0x3f9199) : _0x3f9199 = _0x4bf3b4, _0x3f9199;
    }, _0x5143(_0xf98ed7, _0x18eedb);
}
const {default: inquirer} = await import(_0x58cdaa(0x14c)), {default: ora} = await import(_0x58cdaa(0x177)), {default: figlet} = await import(_0x58cdaa(0x1ac)), {default: crypto} = await import(_0x58cdaa(0xf0));
let loading = ora({
    'prefixText': info + _0x58cdaa(0x1fa),
    'color': _0x58cdaa(0x1e3),
    'spinner': _0x58cdaa(0x14e),
    'interval': 0x50
});
function createBanner(_0x4f12ec, _0xd16e0c = _0x58cdaa(0x1d0), _0x49d544 = green) {
    const _0x37708f = _0x58cdaa, _0x33669f = {
            'jAeru': function (_0x2a6abe, _0x2f1a60) {
                return _0x2a6abe + _0x2f1a60;
            },
            'EAwxb': function (_0x3ccc5c, _0xeeb3bd) {
                return _0x3ccc5c + _0xeeb3bd;
            }
        }, _0x8f61e1 = figlet[_0x37708f(0x181)](_0x4f12ec, _0xd16e0c);
    return _0x33669f[_0x37708f(0x1aa)](_0x33669f[_0x37708f(0x12f)](_0x49d544, _0x8f61e1), reset);
}
class prompts {
    static [_0x58cdaa(0x207)] = {
        'name': _0x58cdaa(0x19a),
        'type': _0x58cdaa(0x1ed),
        'prefix': '',
        'message': ask + _0x58cdaa(0x172),
        'validate': command => {
            const _0x1f7867 = _0x58cdaa, kweCAn = {
                    'XyTFJ': function (x, y) {
                        return x === y;
                    },
                    'LraIc': function (x, y) {
                        return x >= y;
                    },
                    'rNFFp': function (x, y) {
                        return x <= y;
                    },
                    'oZPIo': _0x1f7867(0x226),
                    'uaTIt': function (x, y) {
                        return x + y;
                    },
                    'wcYEb': function (x, y) {
                        return x + y;
                    },
                    'lLvqK': _0x1f7867(0x1fe),
                    'ojPMr': _0x1f7867(0x104)
                };
            if (kweCAn[_0x1f7867(0x188)](command[_0x1f7867(0x21f)](), '') || !/\d/[_0x1f7867(0x151)](command) || (kweCAn[_0x1f7867(0xe1)](command, 0x4) || kweCAn[_0x1f7867(0x16e)](command, 0x0))) {
                if (kweCAn[_0x1f7867(0x188)](kweCAn[_0x1f7867(0x212)], kweCAn[_0x1f7867(0x212)]))
                    return kweCAn[_0x1f7867(0x1eb)](kweCAn[_0x1f7867(0x1eb)](kweCAn[_0x1f7867(0x1eb)](kweCAn[_0x1f7867(0x1c3)]('\x0a', error), kweCAn[_0x1f7867(0x22d)]), info), kweCAn[_0x1f7867(0xeb)]);
                else
                    _0x12b838 = _0x423e86[_0x1f7867(0x199)](_0x48a55);
            }
            return !![];
        }
    };
    static [_0x58cdaa(0x224)] = {
        'name': _0x58cdaa(0x22a),
        'type': _0x58cdaa(0x1ed),
        'prefix': '',
        'message': ask + _0x58cdaa(0xde) + yellow + _0x58cdaa(0x124) + white + '~#',
        'validate': async hexKey => {
            const _0x541ad5 = _0x58cdaa, yOHYAv = {
                    'ipuqA': function (x, y) {
                        return x + y;
                    },
                    'vACWV': function (x, y) {
                        return x + y;
                    },
                    'nMQTw': function (x, y) {
                        return x + y;
                    },
                    'fZKXU': function (x, y) {
                        return x + y;
                    },
                    'QWOkU': _0x541ad5(0x12a),
                    'JoiYw': function (callee, param1) {
                        return callee(param1);
                    },
                    'NIzRX': _0x541ad5(0xe7),
                    'dqxMa': _0x541ad5(0x214),
                    'HbwjV': _0x541ad5(0x1e1),
                    'DYsPd': _0x541ad5(0xef),
                    'IZEaI': function (callee) {
                        return callee();
                    },
                    'ZjcXf': _0x541ad5(0x1c5),
                    'LVbgx': _0x541ad5(0x1cc),
                    'gvdeO': function (x, y) {
                        return x + y;
                    },
                    'nrdEm': function (callee, param1, param2) {
                        return callee(param1, param2);
                    },
                    'MTFNT': _0x541ad5(0x108),
                    'piOuV': function (x, y) {
                        return x === y;
                    },
                    'yHvfT': function (x, y) {
                        return x === y;
                    },
                    'immTz': _0x541ad5(0x1a1),
                    'gVelE': _0x541ad5(0x139),
                    'GqgfR': function (x, y) {
                        return x === y;
                    },
                    'htFmc': function (x, y) {
                        return x === y;
                    },
                    'Wvecs': _0x541ad5(0xec),
                    'bIFXh': function (x, y) {
                        return x === y;
                    },
                    'FxiMJ': _0x541ad5(0xf3),
                    'rLyUr': _0x541ad5(0x1af),
                    'AxWlA': function (x, y) {
                        return x === y;
                    },
                    'iBlrE': function (x, y) {
                        return x !== y;
                    },
                    'fGLKu': _0x541ad5(0x1e4),
                    'OHixv': _0x541ad5(0x14b),
                    'ncVwC': function (x, y) {
                        return x + y;
                    },
                    'KpQgT': function (x, y) {
                        return x + y;
                    },
                    'AhjWc': function (x, y) {
                        return x + y;
                    },
                    'cxCVo': function (x, y) {
                        return x === y;
                    },
                    'QprfK': function (x, y) {
                        return x === y;
                    },
                    'SHBJl': _0x541ad5(0x100),
                    'HKLnr': _0x541ad5(0x143),
                    'srHUx': function (callee) {
                        return callee();
                    },
                    'ykItB': function (x, y) {
                        return x === y;
                    },
                    'HxyXj': _0x541ad5(0x13f),
                    'ZPuks': _0x541ad5(0x189),
                    'dDSsW': _0x541ad5(0x197),
                    'VpnXE': _0x541ad5(0x131),
                    'URAGE': function (callee) {
                        return callee();
                    },
                    'VcZHx': _0x541ad5(0x1f4),
                    'KRGqz': function (x, y) {
                        return x + y;
                    },
                    'cmsWV': function (x, y) {
                        return x + y;
                    },
                    'yjggU': function (x, y) {
                        return x + y;
                    },
                    'NCOIy': function (x, y) {
                        return x + y;
                    },
                    'WmPJE': function (x, y) {
                        return x + y;
                    },
                    'NNqMp': function (callee) {
                        return callee();
                    },
                    'UbKdJ': function (callee) {
                        return callee();
                    },
                    'ZHZBq': _0x541ad5(0x107),
                    'LDJky': function (x, y) {
                        return x + y;
                    },
                    'cMdnf': _0x541ad5(0x1b2),
                    'QpZvU': function (x, y) {
                        return x + y;
                    },
                    'nOXog': function (x, y) {
                        return x + y;
                    },
                    'RMwrG': function (x, y) {
                        return x + y;
                    },
                    'BNezk': function (x, y) {
                        return x + y;
                    }
                };
            if (yOHYAv[_0x541ad5(0xe4)](hexKey[_0x541ad5(0x21f)](), '')) {
                if (yOHYAv[_0x541ad5(0x1e9)](yOHYAv[_0x541ad5(0x217)], yOHYAv[_0x541ad5(0x125)]))
                    _0x13b2da[_0x541ad5(0xed)](yOHYAv[_0x541ad5(0xf8)](_0xadce72, _0x570a94)), _0x42d6df[_0x541ad5(0xed)](yOHYAv[_0x541ad5(0x1a4)](_0x336f64, _0x541ad5(0xdd) + yOHYAv[_0x541ad5(0xf5)](_0x2988d9, _0x1417ce) + _0x541ad5(0x1c5) + yOHYAv[_0x541ad5(0xf5)](_0x39105c, _0x4dcf92) + _0x541ad5(0x1a0))), _0xbd3139[_0x541ad5(0xec)]();
                else
                    return yOHYAv[_0x541ad5(0x1a4)](error, _0x541ad5(0x14f));
            }
            if (yOHYAv[_0x541ad5(0x12d)](hexKey[_0x541ad5(0x20d)](), 'e') || yOHYAv[_0x541ad5(0x165)](hexKey[_0x541ad5(0x20d)](), yOHYAv[_0x541ad5(0x22e)]))
                return yOHYAv[_0x541ad5(0x116)](yOHYAv[_0x541ad5(0x1b9)], yOHYAv[_0x541ad5(0x10b)]) ? new _0x388fd8(_0xd74925 => _0x14cc72(_0xd74925, _0x5d8211)) : !![];
            if (yOHYAv[_0x541ad5(0x129)](hexKey[_0x541ad5(0x20d)](), 'h')) {
                if (yOHYAv[_0x541ad5(0x225)](yOHYAv[_0x541ad5(0x1de)], yOHYAv[_0x541ad5(0x1d4)]))
                    return '\x0a' + green + _0x541ad5(0x1a3) + info + yOHYAv[_0x541ad5(0x17c)](yellow, underline) + _0x541ad5(0x1ea) + yOHYAv[_0x541ad5(0x1a4)](reset, white) + _0x541ad5(0x134) + yOHYAv[_0x541ad5(0x1a6)](yOHYAv[_0x541ad5(0x1a6)](info, yellow), underline) + _0x541ad5(0x11e) + yOHYAv[_0x541ad5(0x1fc)](reset, white) + _0x541ad5(0x20f);
                else
                    _0x22a510[_0x541ad5(0xed)](yOHYAv[_0x541ad5(0x149)](_0x405f9c, yOHYAv[_0x541ad5(0x200)])), _0xb76931[_0x541ad5(0xec)]();
            }
            if (yOHYAv[_0x541ad5(0x136)](hexKey[_0x541ad5(0x20d)](), 'b') || yOHYAv[_0x541ad5(0xdf)](hexKey[_0x541ad5(0x20d)](), yOHYAv[_0x541ad5(0xda)])) {
                if (yOHYAv[_0x541ad5(0x165)](yOHYAv[_0x541ad5(0x153)], yOHYAv[_0x541ad5(0x153)]))
                    yOHYAv[_0x541ad5(0x10a)](FeedBack), process[_0x541ad5(0xec)]();
                else
                    try {
                        const _0x6556a = yOHYAv[_0x541ad5(0x17b)](_0x4b1d43, yOHYAv[_0x541ad5(0x218)]), _0x5ec021 = yOHYAv[_0x541ad5(0x17b)](_0x5abc80, yOHYAv[_0x541ad5(0x1a9)]), _0x17e92b = yOHYAv[_0x541ad5(0x149)](_0x6556a[_0x541ad5(0x20e)]()[_0x541ad5(0x21f)](), _0x5ec021[_0x541ad5(0x20e)]()[_0x541ad5(0x21f)]()), _0x454829 = _0x19dabd[_0x541ad5(0x167)](yOHYAv[_0x541ad5(0xe6)])[_0x541ad5(0x227)](_0x17e92b)[_0x541ad5(0x1c9)](yOHYAv[_0x541ad5(0xe3)]);
                        return _0x454829;
                    } catch (_0xc4062b) {
                        _0x354f68[_0x541ad5(0xed)](_0xc4062b), _0x1333f5[_0x541ad5(0xec)]();
                    }
            }
            try {
                if (yOHYAv[_0x541ad5(0xf4)](yOHYAv[_0x541ad5(0x146)], yOHYAv[_0x541ad5(0x175)]))
                    yOHYAv[_0x541ad5(0x1cf)](_0x2a3f2f);
                else {
                    if (!LogsParsed[yOHYAv[_0x541ad5(0x158)]][yOHYAv[_0x541ad5(0x1d8)]][_0x541ad5(0x186)](hexKey) && yOHYAv[_0x541ad5(0x225)](hexKey, await yOHYAv[_0x541ad5(0x137)](HexSystemInfo))) {
                        if (yOHYAv[_0x541ad5(0x225)](yOHYAv[_0x541ad5(0x21c)], yOHYAv[_0x541ad5(0x21c)]))
                            _0x1948fd = _0x56c6f5[_0x541ad5(0xe8)](yOHYAv[_0x541ad5(0x117)], { 'encoding': yOHYAv[_0x541ad5(0x178)] });
                        else
                            return yOHYAv[_0x541ad5(0x195)](yOHYAv[_0x541ad5(0x1fd)]('\x0a', info), '' + yOHYAv[_0x541ad5(0x114)](yellow, underline) + yOHYAv[_0x541ad5(0xea)](yOHYAv[_0x541ad5(0x1c8)](hexKey, reset), white) + _0x541ad5(0x196) + info + _0x541ad5(0x1f3));
                    } else {
                        if (!LogsParsed[yOHYAv[_0x541ad5(0x158)]][yOHYAv[_0x541ad5(0x1d8)]][_0x541ad5(0x186)](hexKey) && yOHYAv[_0x541ad5(0x12d)](hexKey, await yOHYAv[_0x541ad5(0x12b)](HexSystemInfo)) || LogsParsed[yOHYAv[_0x541ad5(0x158)]][yOHYAv[_0x541ad5(0x1d8)]][_0x541ad5(0x186)](hexKey) && yOHYAv[_0x541ad5(0x225)](hexKey, await yOHYAv[_0x541ad5(0x16f)](HexSystemInfo))) {
                            if (yOHYAv[_0x541ad5(0x12d)](yOHYAv[_0x541ad5(0x113)], yOHYAv[_0x541ad5(0x113)]))
                                return yOHYAv[_0x541ad5(0x1c8)](yOHYAv[_0x541ad5(0x144)]('\x0a', info), '' + yOHYAv[_0x541ad5(0x1c8)](yOHYAv[_0x541ad5(0x1fd)](yellow, underline), hexKey) + yOHYAv[_0x541ad5(0xea)](reset, white) + _0x541ad5(0x164) + info + _0x541ad5(0x1f3));
                            else
                                _0x1f61ea[_0x541ad5(0xed)](yOHYAv[_0x541ad5(0x1a4)](_0x4727ad, yOHYAv[_0x541ad5(0x149)](_0x45fea4, _0x468d94) + _0x541ad5(0x1c5) + yOHYAv[_0x541ad5(0x15b)](_0x4a85df, _0x2ac672) + _0x541ad5(0x204))), _0x584870[_0x541ad5(0xec)]();
                        }
                    }
                }
            } catch ($) {
                if (yOHYAv[_0x541ad5(0x225)](yOHYAv[_0x541ad5(0x19f)], yOHYAv[_0x541ad5(0x19f)]))
                    yOHYAv[_0x541ad5(0x109)](_0x3e87c1, _0x541ad5(0x209) + _0x14bd5d, { 'stdio': yOHYAv[_0x541ad5(0x123)] }), _0x326fcf[_0x541ad5(0xed)]('' + _0x381938 + _0x4bf3ad + _0x1df94d + _0x37c607[_0x541ad5(0x1c0)]() + _0x2b4177 + _0x3540c3 + _0x541ad5(0x234));
                else
                    return yOHYAv[_0x541ad5(0x1b0)](yOHYAv[_0x541ad5(0x142)](yOHYAv[_0x541ad5(0x149)](yOHYAv[_0x541ad5(0x21b)](yOHYAv[_0x541ad5(0x12c)]('\x0a', error), $), '\x0a'), info), _0x541ad5(0xdd) + yOHYAv[_0x541ad5(0x1b0)](yellow, underline) + _0x541ad5(0x1c5) + yOHYAv[_0x541ad5(0x1a6)](reset, white) + _0x541ad5(0x1a0));
            }
            return !![];
        }
    };
}
function delay(_0x30dc64) {
    return new Promise(_0x5ef3d5 => setTimeout(_0x5ef3d5, _0x30dc64));
}
async function animate(_0x714b7a, _0x2d2f73 = 0x3) {
    const _0xe807f5 = _0x58cdaa, _0x1765d0 = {
            'NGYkh': function (_0x1c5c38, _0x3036c5) {
                return _0x1c5c38 + _0x3036c5;
            },
            'hOhcS': function (_0x3ce847, _0x46e190) {
                return _0x3ce847 === _0x46e190;
            },
            'tbaDO': _0xe807f5(0xfa),
            'PLCUt': function (_0x9c9c21, _0x5128f1) {
                return _0x9c9c21(_0x5128f1);
            }
        };
    _0x714b7a = _0x714b7a[_0xe807f5(0x20e)]();
    for (const _0x2334d9 of _0x714b7a) {
        if (_0x1765d0[_0xe807f5(0x180)](_0x1765d0[_0xe807f5(0x221)], _0x1765d0[_0xe807f5(0x221)]))
            await _0x1765d0[_0xe807f5(0xf9)](delay, _0x2d2f73), process[_0xe807f5(0x1ee)][_0xe807f5(0x15c)](_0x2334d9);
        else
            return _0x1765d0[_0xe807f5(0x111)](_0x5f0c14, _0xe807f5(0x14f));
    }
    console[_0xe807f5(0xed)]();
}
async function exit() {
    const _0x1280a2 = _0x58cdaa, _0x1ac917 = {
            'zuSvW': function (_0x5d5df4, _0x1b965b, _0x55fb07) {
                return _0x5d5df4(_0x1b965b, _0x55fb07);
            },
            'doTXK': function (_0xa7889, _0x452cbe) {
                return _0xa7889 + _0x452cbe;
            }
        };
    await _0x1ac917[_0x1280a2(0xfb)](animate, _0x1ac917[_0x1280a2(0x1b8)](info, _0x1280a2(0x112)), 0x19), await _0x1ac917[_0x1280a2(0xfb)](animate, _0x1ac917[_0x1280a2(0x1b8)](info, _0x1280a2(0x18c)), 0x19), process[_0x1280a2(0xec)]();
}
function FeedBack() {
    const _0x2c1a9f = _0x58cdaa, _0x41a31f = {
            'dgTJx': function (_0x2207c7, _0x4afcb4) {
                return _0x2207c7(_0x4afcb4);
            },
            'btSeq': _0x2c1a9f(0x19c)
        };
    _0x41a31f[_0x2c1a9f(0x1ad)](execSync, _0x41a31f[_0x2c1a9f(0x19e)]);
}
async function main() {
    const _0x228098 = _0x58cdaa, _0x5730d1 = {
            'AMyIx': function (_0x32d756) {
                return _0x32d756();
            },
            'vUzfQ': function (_0x1fd2e8, _0x59ee1e) {
                return _0x1fd2e8 + _0x59ee1e;
            },
            'UXPpw': function (_0x55106f, _0x49de67) {
                return _0x55106f + _0x49de67;
            },
            'QNQwO': function (_0x94a924, _0x1bc6a2) {
                return _0x94a924 + _0x1bc6a2;
            },
            'KSXBr': function (_0x39a349, _0x1d99c4) {
                return _0x39a349 + _0x1d99c4;
            },
            'TeLmL': function (_0x40b304, _0x8a4c48) {
                return _0x40b304(_0x8a4c48);
            },
            'UMKlM': _0x228098(0x130),
            'VzvnH': function (_0x27d373, _0x5baf5a) {
                return _0x27d373(_0x5baf5a);
            },
            'jpUZM': function (_0xc8d84, _0x39658f) {
                return _0xc8d84 === _0x39658f;
            },
            'vyQAx': function (_0xea09e7, _0x1bf1af) {
                return _0xea09e7 !== _0x1bf1af;
            },
            'IEWyA': _0x228098(0x17a),
            'vESGj': function (_0x2d0e0e, _0x54524b) {
                return _0x2d0e0e(_0x54524b);
            },
            'DQBIK': _0x228098(0x119),
            'NFWNc': function (_0x309263) {
                return _0x309263();
            },
            'yWRpV': function (_0x16fb23, _0x167534) {
                return _0x16fb23 === _0x167534;
            },
            'cSWpF': function (_0x75075f, _0xf495f4) {
                return _0x75075f(_0xf495f4);
            },
            'dVgXs': _0x228098(0x1a2),
            'SPNQK': _0x228098(0x231),
            'rSlpZ': function (_0xef0f71) {
                return _0xef0f71();
            }
        };
    _0x5730d1[_0x228098(0x150)](ExecClear);
    const _0x24e2b6 = _0x5730d1[_0x228098(0x160)](createBanner, _0x5730d1[_0x228098(0x1d1)]);
    await _0x5730d1[_0x228098(0x145)](animate, _0x24e2b6), await _0x5730d1[_0x228098(0x160)](animate, author), await _0x5730d1[_0x228098(0x145)](animate, _0x228098(0x1e5) + green + _0x228098(0x1ae) + yellow + _0x228098(0x193) + blue + _0x228098(0x13a) + green + _0x228098(0xee) + yellow + _0x228098(0x193) + blue + _0x228098(0x216) + green + _0x228098(0x20b) + yellow + _0x228098(0x193) + blue + _0x228098(0x10e));
    const {command: _0x5dfb13} = await inquirer[_0x228098(0x233)](prompts[_0x228098(0x207)]);
    if (_0x5730d1[_0x228098(0x230)](_0x5730d1[_0x228098(0x160)](parseInt, _0x5dfb13), 0x1))
        _0x5730d1[_0x228098(0x220)](_0x5730d1[_0x228098(0x140)], _0x5730d1[_0x228098(0x140)]) ? (_0x322be0[_0x228098(0xed)](_0x4424af), _0x213761[_0x228098(0xec)]()) : _0x5730d1[_0x228098(0x150)](Auth);
    else {
        if (_0x5730d1[_0x228098(0x230)](_0x5730d1[_0x228098(0x18e)](parseInt, _0x5dfb13), 0x2))
            _0x5730d1[_0x228098(0x220)](_0x5730d1[_0x228098(0x1a7)], _0x5730d1[_0x228098(0x1a7)]) ? _0x5730d1[_0x228098(0x150)](_0x55377d) : (_0x5730d1[_0x228098(0x150)](FeedBack), _0x5730d1[_0x228098(0x11f)](main));
        else {
            if (_0x5730d1[_0x228098(0x205)](_0x5730d1[_0x228098(0x1d5)](parseInt, _0x5dfb13), 0x3)) {
                if (_0x5730d1[_0x228098(0x220)](_0x5730d1[_0x228098(0x15e)], _0x5730d1[_0x228098(0x105)]))
                    _0x5730d1[_0x228098(0x1d7)](exit);
                else
                    try {
                        _0x458b0d[_0x228098(0x191)](_0x5ee5a2);
                    } catch (_0x24c5ee) {
                        _0x442669[_0x228098(0xed)](_0x4536e5 + '\x20' + _0x24c5ee + '\x0a' + _0x1424bd + _0x228098(0xe5) + _0x5730d1[_0x228098(0x18b)](_0x3f5315, _0x495ee1) + _0x228098(0x157) + _0x5730d1[_0x228098(0x1dd)](_0x52b501, _0x2bc9ab) + _0x228098(0x166) + _0x5730d1[_0x228098(0x110)](_0x4904e1, _0xe6d26b) + _0x228098(0x1c6) + _0x5730d1[_0x228098(0x1f5)](_0x2164c3, _0x5a2536) + _0x228098(0x13d) + _0x3eb634 + _0x228098(0x155) + _0x5730d1[_0x228098(0x18b)](_0xefb7e9, _0x2c5f2f) + _0x228098(0x213) + _0x544580), _0x14fceb[_0x228098(0xec)]();
                    }
            }
        }
    }
}
async function Auth() {
    const _0x1c6bd0 = _0x58cdaa, _0x341d6a = {
            'TfsJx': function (_0x2afd7f, _0x3d6241) {
                return _0x2afd7f(_0x3d6241);
            },
            'SyVGB': _0x1c6bd0(0x19c),
            'rCdEe': function (_0x5084a2) {
                return _0x5084a2();
            },
            'yoJto': _0x1c6bd0(0x224),
            'VmbKj': function (_0x5e90b8, _0x502a49) {
                return _0x5e90b8(_0x502a49);
            },
            'GXnQH': function (_0x5e4fc3, _0x3ae594) {
                return _0x5e4fc3 === _0x3ae594;
            },
            'jiNBw': function (_0xe1da1a, _0x274f3f) {
                return _0xe1da1a === _0x274f3f;
            },
            'sRaqe': _0x1c6bd0(0xec),
            'fKvAH': function (_0x1336bc, _0x7d22cf) {
                return _0x1336bc !== _0x7d22cf;
            },
            'LLFtk': _0x1c6bd0(0x118),
            'iBlmE': function (_0x3dee58, _0x811ad0) {
                return _0x3dee58 * _0x811ad0;
            },
            'BfImz': function (_0x26fbb0, _0xe76a9b) {
                return _0x26fbb0 * _0xe76a9b;
            },
            'HVZpq': function (_0x573c0e, _0x113812) {
                return _0x573c0e + _0x113812;
            },
            'clqWf': _0x1c6bd0(0x1a8)
        };
    _0x341d6a[_0x1c6bd0(0x18d)](ExecClear);
    const _0xc578ec = _0x341d6a[_0x1c6bd0(0x11d)](createBanner, _0x341d6a[_0x1c6bd0(0x1b5)]);
    await _0x341d6a[_0x1c6bd0(0x11d)](animate, _0xc578ec), await _0x341d6a[_0x1c6bd0(0x1d2)](animate, author), console[_0x1c6bd0(0xed)]();
    const {hexKey: _0x7232a3} = await inquirer[_0x1c6bd0(0x233)](prompts[_0x1c6bd0(0x224)]);
    (_0x341d6a[_0x1c6bd0(0x228)](_0x7232a3[_0x1c6bd0(0x20d)](), 'e') || _0x341d6a[_0x1c6bd0(0x17f)](_0x7232a3[_0x1c6bd0(0x20d)](), _0x341d6a[_0x1c6bd0(0x1b1)])) && (_0x341d6a[_0x1c6bd0(0x1bd)](_0x341d6a[_0x1c6bd0(0x190)], _0x341d6a[_0x1c6bd0(0x190)]) ? _0x341d6a[_0x1c6bd0(0x11d)](_0x9157cd, _0x341d6a[_0x1c6bd0(0x1bc)]) : await _0x341d6a[_0x1c6bd0(0x18d)](exit)), loading[_0x1c6bd0(0x1b4)](), await _0x341d6a[_0x1c6bd0(0x11d)](delay, _0x341d6a[_0x1c6bd0(0x21a)](Math[_0x1c6bd0(0x141)](_0x341d6a[_0x1c6bd0(0x106)](Math[_0x1c6bd0(0x22b)](), 0x5)), 0x1388)), loading[_0x1c6bd0(0x232)](), console[_0x1c6bd0(0xed)](_0x341d6a[_0x1c6bd0(0x1df)](info, _0x341d6a[_0x1c6bd0(0x176)])), process[_0x1c6bd0(0xec)]();
}
async function HexSystemInfo() {
    const _0x3644d6 = _0x58cdaa, _0x26d31b = {
            'syqws': function (_0x99f8e, _0x497264) {
                return _0x99f8e + _0x497264;
            },
            'ajMsa': function (_0x5e937f, _0x2fed5a) {
                return _0x5e937f === _0x2fed5a;
            },
            'bAQHY': _0x3644d6(0x171),
            'ImmiZ': function (_0xf456c8, _0x526c2c) {
                return _0xf456c8(_0x526c2c);
            },
            'SdVKp': _0x3644d6(0xe7),
            'baMEu': _0x3644d6(0x214),
            'LSSNx': _0x3644d6(0x1e1),
            'gwEEv': _0x3644d6(0xef),
            'qfkqS': _0x3644d6(0x101),
            'DXzAW': _0x3644d6(0x222)
        };
    try {
        if (_0x26d31b[_0x3644d6(0x163)](_0x26d31b[_0x3644d6(0x1ab)], _0x26d31b[_0x3644d6(0x1ab)])) {
            const _0x4d2e5b = _0x26d31b[_0x3644d6(0x235)](execSync, _0x26d31b[_0x3644d6(0x128)]), _0x36458a = _0x26d31b[_0x3644d6(0x235)](execSync, _0x26d31b[_0x3644d6(0x16b)]), _0x449ed4 = _0x26d31b[_0x3644d6(0x182)](_0x4d2e5b[_0x3644d6(0x20e)]()[_0x3644d6(0x21f)](), _0x36458a[_0x3644d6(0x20e)]()[_0x3644d6(0x21f)]()), _0x202bd0 = crypto[_0x3644d6(0x167)](_0x26d31b[_0x3644d6(0x1bf)])[_0x3644d6(0x227)](_0x449ed4)[_0x3644d6(0x1c9)](_0x26d31b[_0x3644d6(0x13c)]);
            return _0x202bd0;
        } else {
            const _0x1338c9 = this[_0x3644d6(0x161)](0x0, 0x1)[_0x3644d6(0x1db)]();
            return _0x26d31b[_0x3644d6(0x182)](_0x1338c9, this[_0x3644d6(0x161)](0x1, _0x513189));
        }
    } catch (_0x4fe48a) {
        if (_0x26d31b[_0x3644d6(0x163)](_0x26d31b[_0x3644d6(0x138)], _0x26d31b[_0x3644d6(0x13e)]))
            return !![];
        else
            console[_0x3644d6(0xed)](_0x4fe48a), process[_0x3644d6(0xec)]();
    }
}
main();