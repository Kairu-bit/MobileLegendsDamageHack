const _0x526cfa = _0x1672;
(function (_0x1bb5fe, _0x3258d8) {
    const _0x5dbf8a = _0x1672, _0x29f409 = _0x1bb5fe();
    while (!![]) {
        try {
            const _0x479461 = -parseInt(_0x5dbf8a(0x17b)) / 0x1 + parseInt(_0x5dbf8a(0x2ab)) / 0x2 * (parseInt(_0x5dbf8a(0xc7)) / 0x3) + -parseInt(_0x5dbf8a(0x2f4)) / 0x4 * (parseInt(_0x5dbf8a(0xff)) / 0x5) + -parseInt(_0x5dbf8a(0xf4)) / 0x6 + -parseInt(_0x5dbf8a(0x1fa)) / 0x7 + parseInt(_0x5dbf8a(0x99)) / 0x8 * (parseInt(_0x5dbf8a(0x2a5)) / 0x9) + parseInt(_0x5dbf8a(0x106)) / 0xa;
            if (_0x479461 === _0x3258d8)
                break;
            else
                _0x29f409['push'](_0x29f409['shift']());
        } catch (_0x15e263) {
            _0x29f409['push'](_0x29f409['shift']());
        }
    }
}(_0x2dee, 0x4bd97));
import _0x49db60 from 'fs';
import {
    exec,
    execSync
} from 'child_process';
import { promisify } from 'util';
function _0x1672(_0x29b4b6, _0x4c6199) {
    const _0x2dee9c = _0x2dee();
    return _0x1672 = function (_0x1672ac, _0x390167) {
        _0x1672ac = _0x1672ac - 0x93;
        let _0x2899f8 = _0x2dee9c[_0x1672ac];
        if (_0x1672['Wvnahx'] === undefined) {
            var _0x3452d8 = function (_0x540432) {
                const _0x29516f = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
                let _0x237c4c = '', _0x15f565 = '';
                for (let _0x5ea7ae = 0x0, _0x639a63, _0x5418c1, _0x93e51c = 0x0; _0x5418c1 = _0x540432['charAt'](_0x93e51c++); ~_0x5418c1 && (_0x639a63 = _0x5ea7ae % 0x4 ? _0x639a63 * 0x40 + _0x5418c1 : _0x5418c1, _0x5ea7ae++ % 0x4) ? _0x237c4c += String['fromCharCode'](0xff & _0x639a63 >> (-0x2 * _0x5ea7ae & 0x6)) : 0x0) {
                    _0x5418c1 = _0x29516f['indexOf'](_0x5418c1);
                }
                for (let _0x54deaf = 0x0, _0x2d842c = _0x237c4c['length']; _0x54deaf < _0x2d842c; _0x54deaf++) {
                    _0x15f565 += '%' + ('00' + _0x237c4c['charCodeAt'](_0x54deaf)['toString'](0x10))['slice'](-0x2);
                }
                return decodeURIComponent(_0x15f565);
            };
            _0x1672['iRwbIk'] = _0x3452d8, _0x29b4b6 = arguments, _0x1672['Wvnahx'] = !![];
        }
        const _0x2488f4 = _0x2dee9c[0x0], _0x39d1c9 = _0x1672ac + _0x2488f4, _0xf90ce8 = _0x29b4b6[_0x39d1c9];
        return !_0xf90ce8 ? (_0x2899f8 = _0x1672['iRwbIk'](_0x2899f8), _0x29b4b6[_0x39d1c9] = _0x2899f8) : _0x2899f8 = _0xf90ce8, _0x2899f8;
    }, _0x1672(_0x29b4b6, _0x4c6199);
}
import _0x57b482 from 'dns';
const utilExec = promisify(exec), yellow = _0x526cfa(0x23a), green = _0x526cfa(0x1d1), red = _0x526cfa(0x184), white = _0x526cfa(0x2fd), blue = _0x526cfa(0x2fe), underline = _0x526cfa(0x1ce), reset = _0x526cfa(0x13e), info = blue + _0x526cfa(0x1f8) + white + '\x20', error = red + _0x526cfa(0x296) + white + '\x20', ask = yellow + _0x526cfa(0x9f) + white + '\x20', NodeModules = _0x526cfa(0x254), UnityZip = _0x526cfa(0x18f), Cache = _0x526cfa(0x216), UnityFiles = [
        _0x526cfa(0x2ad),
        _0x526cfa(0x142),
        _0x526cfa(0x160),
        _0x526cfa(0x29f)
    ], RequiredDependencies = [
        _0x526cfa(0x2cf),
        _0x526cfa(0x26b),
        _0x526cfa(0x301),
        _0x526cfa(0x1f7),
        _0x526cfa(0x9a)
    ], Storage = _0x526cfa(0x98);
let MLDHSTAT = _0x526cfa(0x225);
const author = '\x0a' + yellow + _0x526cfa(0x171) + yellow + '║' + blue + _0x526cfa(0x2bc) + green + _0x526cfa(0xa4) + yellow + _0x526cfa(0x1d5) + yellow + '║' + blue + _0x526cfa(0x2aa) + green + _0x526cfa(0xdb) + yellow + '║\x0a' + yellow + '║' + blue + _0x526cfa(0x237) + green + _0x526cfa(0x297) + yellow + '║\x0a' + yellow + _0x526cfa(0x134);
let Logs, LogsParsed;
try {
    Logs = _0x49db60[_0x526cfa(0x1ac)](_0x526cfa(0x191), { 'encoding': _0x526cfa(0x138) });
} catch (_0x212d57) {
    console[_0x526cfa(0x2d8)](error + (yellow + underline + _0x526cfa(0x2b8) + (reset + white) + _0x526cfa(0x2de))), process[_0x526cfa(0x116)]();
}
try {
    LogsParsed = JSON[_0x526cfa(0x302)](Logs);
} catch (_0x1aad25) {
    console[_0x526cfa(0x2d8)](error + _0x1aad25), console[_0x526cfa(0x2d8)](info + (_0x526cfa(0x2d6) + (yellow + underline) + _0x526cfa(0x2b8) + (reset + white) + _0x526cfa(0x1b0))), process[_0x526cfa(0x116)]();
}
!_0x49db60[_0x526cfa(0x152)](UnityZip) && (console[_0x526cfa(0x2d8)](info + (yellow + underline + _0x526cfa(0x2ca) + (reset + white) + _0x526cfa(0x2e7))), process[_0x526cfa(0x116)]());
const MLData = _0x526cfa(0x2c9), MLDocuments = _0x526cfa(0x194), UnityShaderCache = _0x526cfa(0x163);
function checkStoragePermission() {
    const _0x3a2f50 = _0x526cfa, _0x56b302 = {
            'WxogL': function (_0x3fcffe, _0x5b30b5) {
                return _0x3fcffe(_0x5b30b5);
            },
            'wXDsG': _0x3a2f50(0x133),
            'PssAJ': function (_0x30a4b8, _0x51696c) {
                return _0x30a4b8 + _0x51696c;
            },
            'zASAM': function (_0x206c02, _0x7ce646) {
                return _0x206c02 + _0x7ce646;
            },
            'Wwoii': _0x3a2f50(0x24a),
            'gQRMw': _0x3a2f50(0xa5),
            'JjeZO': function (_0x5ed7f8, _0x13b341) {
                return _0x5ed7f8 !== _0x13b341;
            },
            'BUMyW': _0x3a2f50(0x27b),
            'NUyME': _0x3a2f50(0x122),
            'oEYwl': function (_0x499faf, _0x5b542c) {
                return _0x499faf === _0x5b542c;
            },
            'AZNBH': _0x3a2f50(0x208),
            'ZmRCN': _0x3a2f50(0x97),
            'nADke': function (_0x43cb6a, _0x418e42) {
                return _0x43cb6a + _0x418e42;
            },
            'WpZMm': function (_0x5a62dd, _0xe34fa2) {
                return _0x5a62dd + _0xe34fa2;
            }
        };
    try {
        _0x56b302[_0x3a2f50(0x136)](_0x56b302[_0x3a2f50(0x1d4)], _0x56b302[_0x3a2f50(0xc6)]) ? _0x49db60[_0x3a2f50(0xa8)](Storage) : _0x56b302[_0x3a2f50(0x10b)](_0x16c343, _0x3a2f50(0x168) + _0x581120[_0x3a2f50(0x281)](_0x5d685e[_0x1c9e78][_0x56b302[_0x3a2f50(0x24f)]]) + '\x27\x20' + _0x154e20);
    } catch (_0x1f0323) {
        if (_0x56b302[_0x3a2f50(0x1ea)](_0x56b302[_0x3a2f50(0x21e)], _0x56b302[_0x3a2f50(0x247)]))
            return _0x56b302[_0x3a2f50(0x19a)](_0x56b302[_0x3a2f50(0x19a)](_0x56b302[_0x3a2f50(0x19a)](_0x56b302[_0x3a2f50(0x14a)]('\x0a', _0x5b0fff), _0x56b302[_0x3a2f50(0xbd)]), _0x49bf86), _0x56b302[_0x3a2f50(0x203)]);
        else
            console[_0x3a2f50(0x2d8)](error + '\x20' + _0x1f0323 + '\x0a' + info + _0x3a2f50(0x1f9) + _0x56b302[_0x3a2f50(0x19a)](yellow, underline) + _0x3a2f50(0x206) + _0x56b302[_0x3a2f50(0xf8)](reset, info) + _0x3a2f50(0x11d) + _0x56b302[_0x3a2f50(0x188)](yellow, underline) + _0x3a2f50(0x1bb) + _0x56b302[_0x3a2f50(0x19a)](reset, white) + _0x3a2f50(0x2e0) + info + _0x3a2f50(0x292) + _0x56b302[_0x3a2f50(0x19a)](yellow, underline) + _0x3a2f50(0x17c) + reset), process[_0x3a2f50(0x116)]();
    }
}
String[_0x526cfa(0x157)][_0x526cfa(0x22e)] = function () {
    const _0x556038 = _0x526cfa, _0x251c65 = {
            'LgcHM': function (_0x8055eb, _0x4b5a1a) {
                return _0x8055eb + _0x4b5a1a;
            }
        }, _0x5668b0 = this[_0x556038(0x1d7)](0x0, 0x1)[_0x556038(0x289)]();
    return _0x251c65[_0x556038(0xc0)](_0x5668b0, this[_0x556038(0x1d7)](0x1, undefined));
}, checkStoragePermission(), setInterval(async function () {
    const _0x4611c5 = _0x526cfa, _0x5eb3a1 = {
            'EmPDO': _0x4611c5(0x191),
            'CUvll': _0x4611c5(0x138),
            'HPqwi': _0x4611c5(0x2ce),
            'oguoQ': function (_0x28bc5b, _0x4eefb1) {
                return _0x28bc5b === _0x4eefb1;
            },
            'GxPGz': _0x4611c5(0x267),
            'PevHA': _0x4611c5(0x1e6),
            'PFKdx': _0x4611c5(0xd3),
            'UMOXP': function (_0x3f3642, _0x475181) {
                return _0x3f3642 !== _0x475181;
            },
            'XIVHJ': _0x4611c5(0x2f0),
            'wTpvx': _0x4611c5(0x14b),
            'hPwKV': function (_0x3f21af) {
                return _0x3f21af();
            },
            'NsVIW': function (_0x591091, _0x2ed788) {
                return _0x591091 + _0x2ed788;
            }
        };
    try {
        _0x5eb3a1[_0x4611c5(0x245)](_0x5eb3a1[_0x4611c5(0x217)], _0x5eb3a1[_0x4611c5(0x252)]) ? _0x237c4c = _0x15f565[_0x4611c5(0x1ac)](_0x5eb3a1[_0x4611c5(0x2fa)], { 'encoding': _0x5eb3a1[_0x4611c5(0x16b)] }) : await _0x57b482[_0x4611c5(0xe8)][_0x4611c5(0x128)](_0x5eb3a1[_0x4611c5(0x1ba)]);
    } catch (_0x549f57) {
        _0x5eb3a1[_0x4611c5(0x1ff)](_0x5eb3a1[_0x4611c5(0x164)], _0x5eb3a1[_0x4611c5(0x12c)]) ? (_0x5eb3a1[_0x4611c5(0x94)](ExecClear), console[_0x4611c5(0x2d8)](_0x5eb3a1[_0x4611c5(0x1af)](error, _0x4611c5(0x2e6))), process[_0x4611c5(0x116)]()) : _0x27b0e0 = _0x5eb3a1[_0x4611c5(0x121)];
    }
}, 0x3e8);
function ExecClear() {
    const _0x41151f = _0x526cfa, _0x5e4f81 = {
            'rXrmR': function (_0x451588, _0x1a2550, _0x5d6540) {
                return _0x451588(_0x1a2550, _0x5d6540);
            },
            'ZhsDN': _0x41151f(0x187),
            'jxDyh': _0x41151f(0x246)
        };
    _0x5e4f81[_0x41151f(0x11f)](execSync, _0x5e4f81[_0x41151f(0x16e)], { 'stdio': _0x5e4f81[_0x41151f(0x11e)] });
}
function _0x2dee() {
    const _0x4798d9 = [
        'A3Hzsg0',
        'ieLUC3rHBgXLzcbtDwnJzxnZzNvSBhK',
        'v3bzBxu',
        'vfHtrvu',
        'C3rKB3v0',
        'rgvSzxrPBMCG',
        'zMTwzvq',
        'rNHrDNC',
        'Dg9uAxrSzq',
        'uMXJwNe',
        'tNfWBxe',
        'EM5QCw0',
        'vNLuBNG',
        'DMvkBKK',
        'DwXZv0G',
        'r3nrtLe',
        'rgroA3i',
        'vgvSzwDYyw0GoG',
        'ne1HEa',
        'rhL3DxK',
        'g1SXoZmZBq',
        'EZj9',
        'ww91CIblzxKGtM90iezVDw5KcG',
        'tuXeyw1Hz2viywnRFIm',
        'uxHewhK',
        'uwrYBMi',
        'A3LusuC',
        'z1fvDKe',
        'sLnYtLy',
        'EMv3BLe',
        'zuPwyui',
        'B2D1B1e',
        'Aw5OzxjPDa',
        'wM1sq04',
        'z2v4C1q',
        'B3frsuC',
        'sw52ywXPzcbpChrPB24UcG',
        'EhvTwg4',
        'sKPAuMW',
        'tNfyCNq',
        'DKDLCwK',
        'D1HeC0C',
        'CKLMr2O',
        'ywrTAw5lzxK',
        'ugv2see',
        'suvzAMO',
        'l2rHDgeVzgf0ys9JB20UDgvYBxv4l2zPBgvZl2HVBwuVBM9Kzv9TB2r1BgvZlW',
        'CM0GjW',
        'sw50zwDYyxrPB24Gu3vJy2vZC2z1Bca+ia',
        'rLHHqK0',
        'y0Xks0u',
        'wePNu2S',
        'AgTuvfa',
        'ic0GrvHjva',
        'DxzPtKe',
        'tw9IAwXLieXLz2vUzhmGrgf0ysboB3qGrM91BMq',
        'rfzQzgS',
        't2LHDgi',
        'uuTuAu4',
        'z2v0ChjVCcbYBY5ZExn0zw0UyNvPBgqUAwq',
        'u0Lhsu5u',
        'yu9dzuC',
        'v2fUDcbby2nLC3m/ifbYzxnZigiGDg8GyNv5igeGA2v5',
        'A2fnu3C',
        'ic0Gte9hsu4GqvmGqvvuse9scG',
        'vhbdyNa',
        'sLLRBwO',
        'AhrUD3i',
        'DhjPBq',
        'zMLNBgv0',
        'sw5TCei',
        'suyGwu9vievoq09vtLrfuIbbtLKGqLvhuYbpuIbju1nvrvmSifbmruftrsbgruveqKfdsYbzt1vsie1fu1nbr0uGsvmGvKfmvufcteuGve8GvvmGoIK',
        'EKTqC3a',
        'q3nOExq',
        'mxWZFdj8mhW0',
        'CvzNqNO',
        'DLLMsNa',
        'u0PsANe',
        'rvHjvaO',
        'y096Avm',
        'vKHXBNy',
        'vKfRs20',
        'AvjsCem',
        'CwTWD3C',
        'zNvfA3i',
        'qNfvvMm',
        'weTxrve',
        'C0Plyxm',
        'D3foDMe',
        'Aw5JBhvKzxm',
        'CwPiEMC',
        'y29Uy2f0',
        'refnquDfieHbq0SGsu5krunuruqGu1vdq0vtu0zvteXz',
        'yw1qwuK',
        'A0HNvwi',
        'rg8GEw91ihDHBNqGDg8Gz28GyMfJAZ8GkhKVBIWGzgvMyxvSDdOGBIK',
        'uKztsuG',
        'DefJuMm',
        'ze1fzKW',
        'Dg9vChbLCKnHC2u',
        'run0zvq',
        'BvbjBK4',
        'rxnotNm',
        'BgvUz3rO',
        'qKfmt1i',
        'wuLrqwO',
        'qKTSBLq',
        'EgrTywu',
        'ww91ihDPBgWGyMuGChjVBxb0zwqGDg8Gz3jHBNqGC3rVCMfNzsbWzxjTAxnZAw9UCY4GuhjLC3mG',
        'vKPYDgC',
        'BNndDwO',
        'BwTKAxiGlxaG',
        'w8oxxq',
        'ieblywLYDurLDIaGicaGicaGicaGicaGicaGicaGicaGia',
        'yvHYrNm',
        'svn1EvC',
        'wMjbqvm',
        'vu5eB3K',
        'uNHgzLi',
        'rgnzsNi',
        'qNjYCKK',
        'otaZmZbKnZrMztK1yZa0ztq0ytC2ote0zgqWywzLyte0otjJote1zJG4m2y0odfLmZaYyZmWyJi1zdy2mdjHzI5vBML0Eq',
        'z2v0ChjVCcbYBY5ZExn0zw0UyNvPBgqUDMvYC2LVBI5PBMnYzw1LBNrHBa',
        'BhffC3i',
        'Eezlq3u',
        'y2LtCw4',
        'ANnPz2S',
        'mJC0ntyZrNboEufe',
        'yND4shK',
        'ywf0AeO',
        'D1DTuu0',
        'zs9LEgL0',
        'rMfJzwjVB2SGoG',
        'ndG5odG2wwX5uhb3',
        'zgLNzxn0',
        'n2q4mdrImZiYmdC1mZDLztqYyte5mZjMywq4nwu4y2jJmdiZzdi1mdG5n2zInMi0yZi3ztjKytmZmgu5zwfJyI4Gvw5PDhK',
        'Agv4',
        'EZf9',
        'sgv4ieTLEsa',
        'D3jPDgvgAwXLu3LUyW',
        'wLLVAvO',
        'ic0TpIa',
        'B1PxEw0',
        'wKHyEgW',
        'sw50zwDYyxrPBMCGpIa',
        'ug5fzvK',
        'Bg9NCY5QC29U',
        'BuPSC2K',
        'z1nozuW',
        'z1nvsgG',
        'qxv0Ag9YidO',
        'zMzVwem',
        'AhjKB0m',
        'qLfRvxO',
        'zKzewhq',
        'txrJu1O',
        'txj5uha',
        'vxnLCNnlzxK',
        'shPdDNq',
        'DNbSCNe',
        'z29AAgu',
        'zNnkqvm',
        'DKPkDMu',
        'l3nKy2fYzc9bBMrYB2LKl2rHDgeVy29TlM1VyMLSzs5SzwDLBMrZlW',
        'vw5PDhLgAwXLCY56Axa',
        'wfDpBuK',
        'uLDWq2G',
        'Dg9tDhjPBMC',
        'reLtqujmrsbequ1br0uGsefdsW',
        'Aw5XDwLYzxi',
        'vhrgs3m',
        'zvbxuuO',
        'A1fVve4',
        'Dg9mB3DLCKnHC2u',
        'CMfUzg9T',
        'Au9fBMS',
        're8GtK9uie1preLgwsa',
        'DxjhBhi',
        'Bg9N',
        'z2fsyuy',
        'v2r5AKu',
        'q2jvCKC',
        'zKrwvve',
        'vM5XAhC',
        'ie5pvcbgt1vora',
        'ENrqAfG',
        'igfUzcb0AgvUihbYzxnZievUDgvYiaO',
        'Axrgzwu',
        'lI4U',
        'v2jHv0S',
        's3LnrgW',
        'uM9Wv2e',
        'tM8Gsw50zxjUzxqGq29UBMvJDgLVBG',
        'ie5VDcbgB3vUza',
        'yxv0Ag9Y',
        'wfzvzK4',
        'EhvwrKm',
        'Afvyvxe',
        'EgrNlw9Wzw4GAhr0Chm6lY93D3CUzMfJzwjVB2SUy29Tl3bYB2zPBguUCgHWp2LKpteWmda4nZq4ntG2mdiZna',
        't2nhDwO',
        'ALnuzum',
        'BfLvAxu',
        'ENn0C2K',
        'BLb2CKm',
        'yvLHu0K',
        'Ahfgv2S',
        'ndC5odi4vvnHDunx',
        'uu5Nwuq',
        'vMXvq2u',
        'DhnmEMu',
        'D1jjDue',
        'C3rVCa',
        'rw1qre8',
        'rxjYB3iGB2nJDxjLzcbHzgrPBMCGoIa',
        'EwDJrK8',
        'g1SXoZm3Bq',
        'g1SXoZm0Bq',
        'qK51whO',
        'qvz2B3O',
        'B3jH',
        'CgfYC2u',
        'CNLdA1a',
        'Afb3s1y',
        'qxv0BYbmB2DPBJ8GkhKVBIWGzgvMyxvSDdOGEsK',
        'DNP5y1e',
        'vfrtDNC',
        'l3n0B3jHz2uVzw11Bgf0zwqVmc8',
        'odHbsNbJC2W',
        'ywrTlxPPCa',
        'CNfREfq',
        'u21lCKi',
        'tw9IAwXLieXLz2vUzhmGrg9JDw1LBNrZie5VDcbgB3vUza',
        'ruDAEKe',
        'wZ9D',
        'r0Dsz20',
        'zuXyyM8',
        'r0vAyMG',
        'yKHHC0q',
        'ieblywLYDsbezxySiebkzxjYEw1Pzq',
        'q2HVB3nLigfUig9WDgLVBIbMCM9TihrOzsbTzw51lG',
        'vgHPCYbRzxKGAxmGy3vYCMvUDgX5igjLAw5NigfJy2vZC2vKigzYB20Gyw5VDgHLCIbKzxzPy2uUcG',
        'BNbTigKGls1ZyxzLia',
        'CMvHzgrPCLn5BMm',
        'CwDdzuq',
        'z1L1t0S',
        'z2XqzMi',
        'EuLWCLe',
        'ufHIA1y',
        'C3rYAw5NAwz5',
        'EvfPBLG',
        'tfb4yxi',
        'q2T6wuS',
        'wLr4wLO',
        'z1j4Eee',
        'qu9uEuC',
        'uePRwNK',
        'zxH0CMfJDefSBfrV',
        'zg9Uu2m',
        'Cgziwei',
        'C2HHmJu2',
        'qwTfte8',
        'yLnQwNG',
        'lI8UBg9NCY5QC29U',
        'v3DVAwK',
        'vg5uDhO',
        'qLnwq2e',
        'tgDJse0',
        'Au1iA0S',
        'r1PWBxa',
        'Cw9Qweu',
        'rNzzDvu',
        'EgL4BeC',
        'tLv5tuu',
        'm2fIrw5yzW',
        'yNnZsxu',
        'D3jPDgu',
        'shHmt3K',
        'DhbHzKS',
        'zvPZs3m',
        'EZn9',
        's1btC1m',
        'EMHOvMW',
        'shPSDKO',
        'rgrNBwm',
        's3HoC1G',
        'D3D3lMDVB2DSzs5JB20',
        'tM9dz3O',
        'weDNuhC',
        'yuHquhu',
        'EvzLtvy',
        's3ngywy',
        'D0jvyxK',
        'kIPdt01nqu5euYOQcG',
        'ieblEwXLifrPBgfUBYWGqerLBgeGq3j1EIbkzxjYEw1Pzq',
        'BLfOvMC',
        'sfL1zfi',
        'AhPXCfC',
        'tg93sKS',
        'Cg9PBNq',
        'txzSD2i',
        'zhf3sNy',
        'swHWEwW',
        'r1f1CK4',
        'tLHxBvO',
        'D2vcwMm',
        's0f4BuK',
        'ChjVBwLZzxm',
        'tgHpzMG',
        'vw9Oz3m',
        't21fv3G',
        'qMjgDem',
        'BMn3D2i',
        'DvrtAvC',
        'tu90C0u',
        'rvDuq0q',
        'Egr6zgy',
        'qK9by2m',
        'CwnTDum',
        'mZiWmti1mLL6CMzAAq',
        'DKTTqLG',
        'qwXSifjLCxvPCMvKierLCgvUzgvUy3KGjIbqywnRywDLCYbjBNn0ywXSzwqGu3vJy2vZC2z1BgX5',
        'ANDmz1K',
        'BKfeA2u',
        'AMrACMy',
        'wuruqNC',
        'BKTlwe0',
        's2v5yM9HCMqGsw50zxjYDxb0',
        't3jTzey',
        'Aw5WDxq',
        'nxLcC1fkwG',
        'BwfPBG',
        'u0zdtNu',
        'Bw5JtLm',
        'BK5cC2S',
        'A2rQwxi',
        'tgThDum',
        'mteWnJKYntb5ru9dvuO',
        'rKvfrejbq0Skica',
        'r2XeAMG',
        'yMvYsfu',
        'twLZC2LUzYbZB21LihvUAxr5igzPBgvZidOO',
        'v3HVz0W',
        'qNzOt2q',
        'khbYzxnZigGGDg8GAgvSCcK',
        'z3jLzw4',
        'yLLNEve',
        'z2v0rw50CMLLCW',
        'Dgj5Agm',
        'D3DQDhK',
        'zwT4v24',
        'AeXfBgG',
        'vwjjugi',
        'zxHPDa',
        'DfjPwvG',
        'ueXXz3q',
        'qxbzuMS',
        'DwPzC1y',
        'BMjcvM8',
        'DML6vgm',
        'uhjVy2vLzcbIEsb0ExbPBMCG',
        'ANHeEwG',
        'CLHYBvi',
        'uM1tCxy',
        'sfbXD2K',
        'r1PPDMG',
        'zMnPug8',
        'u09us2y',
        'BgXRqMu',
        'wfPYs20',
        'zfnVCw0',
        'Bg9VA3vW',
        'vNDstLa',
        'sgzJEvO',
        'teTiBxq',
        'D1rWDNG',
        'veHbtKTtiezpuIbvu0LorW',
        'BMnvsfq',
        'C3bSAxq',
        'A0DWExK',
        'wNfKr1C',
        'CgzOz2O',
        'zw50CNLoyw1L',
        '4PwA4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4PwD',
        'seTWEMm',
        'sMPLwK8',
        'CgvOthm',
        'DxrMoa',
        'DhjQy3y',
        'BKvlCgK',
        'D091t3u',
        'CKjJze0',
        'A2jPtMG',
        'g1SWBq',
        'D0HnywO',
        'qvvusevoveLdqvrfcIaG',
        'sw5ZDgfSBgLUzYa',
        'mMq5nZLMngy2zdvJmJrKnwvKnJm1odiZmZDLmtq2mguZy2u0zJjHzJiWmdiWzdm5mZe2mwy3yZK3mtHMogi1mI51BML0EtnK',
        'ic0Gr0vuieeGs0vzcG',
        'EuHfEvK',
        'EfrcEhi',
        'vM1RAxe',
        'uvn4s0W',
        'Ew1gB2W',
        'wvf6Duq',
        'EKftqu0',
        'zwn3se4',
        'AeLbrNC',
        'refnquDfieHbq0SGuKvnt1zfifnvq0nfu1ngvuXmwq',
        'r3jJsLy',
        'EgDRrgW',
        'ANDHtvK',
        'z1PYsg8',
        'zxHPC3rZu3LUyW',
        'tfvOuMu',
        'DMfeq1m',
        'DKnUr3C',
        'vwrrEgG',
        'ChjVDg90ExbL',
        'twDqvwu',
        'DxbKyxrL',
        'zxvnA1m',
        'r3Dbz04',
        'ANfwz2C',
        'DM15z2O',
        'rxjjBfi',
        'vvL0txC',
        'mgy5zdDHzMuZowi2zwi2mgyXmgiXzdaYnge4otrJndG1mZHKnJHKmJe0nZbHogrKzMi5nta1otaWmJLKmdKYns5vBML0Eq',
        'AwXbq2O',
        'v0rLu1u',
        'l3nKy2fYzc9bBMrYB2LKl2rHDgeVy29TlM1VyMLSzs5SzwDLBMrZl2nHy2HLl1vUAxr5u2HHzgvYq2fJAguV',
        'weLwseO',
        'A3LkBeC',
        'ELrHquC',
        'rw5HyMXLza',
        'BxyGjW',
        'tLnzD0i',
        'uKnQveK',
        'q1v2BgW',
        'sLrOz1m',
        'vfDnufe',
        'wMHZre4',
        'y0nmtvy',
        'DNHwBui',
        '4Pwu4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4Pwq4PwxcG',
        'rNvWBwG',
        'C3vtBvK',
        'qxv0AgvUDgLJyxrPBMC',
        'DwzbtwS',
        'yNPwsgy',
        'vuTWqw8',
        'ChDiEha',
        'uLDbELO',
        'Ehfft1q',
        'ntu3ntu4zfbVtKj3',
        'j0fSBg93jW',
        'CKfUz20',
        'txrPA3m',
        'tLDLq1G',
        'z2j6wvq',
        'wKf6q0i',
        'yMnbrgW',
        'C3rHCNq',
        'g1SXoZmXBq',
        'yI9IDxK',
        'ELv6AxK',
        'y2XLyxi',
        'v3bAtw0',
        'sM5TseW',
        'Dgj2Afu',
        'yNv5',
        'DLbZy3C',
        'rurjCu0',
        'zMXVB3i',
        'lI8Uvw5PDhLgAwXLCY56Axa',
        'BwPbCMO',
        'lMXVz3mUANnVBG',
        'wwvSruS',
        'BKrLD3m',
        'l3nKy2fYzc9bBMrYB2LKl2rHDgeVy29TlM1VyMLSzs5SzwDLBMrZl2zPBgvZl2rYywDVBJiWmtCVyxnZzxrZl0rVy3vTzw50l2fUzhjVAwqV',
        'q0fntMW',
        'B1zru2K',
        's0XYEKK',
        'Buz0t2K',
        'Bg9NAw4',
        'uhnZquO',
        'wxf6wg8',
        'vMrrrwm',
        'qxb2seG',
        'AgTcCeC',
        'Eg9etNi',
        'v0zAsg8',
        'rxfksKm',
        'Cw9Uwxe',
        'D3b2se8',
        'zvPsBhO',
        'sK1kCha',
        'Bg14Dfq',
        'Dgv4Dfn5BMm',
        'quLyAKC',
        'B2LpvMe',
        'De5ht1i',
        'DNnyExu',
        'CMvHzezPBgvtEw5J',
        'C3rHCNrKBwDOywnR',
        'vuDVtKO',
        'tNnwsvC',
        'ieLgifLpvsbet04Nvcbxqu5uiefowsbquK9ctevnuW',
        'yMfJAW',
        'uevos2O',
        'yNnesKy',
        'yxv0B0XVz2LU',
        'y1fite0',
        'B0XRyKG',
        'rhreA0S',
        'z2PRr1C',
        'ifrOAxmGA2v5igLZign1CNjLBNrSEsbIzwLUzYbHy2nLC3nLzcbMCM9TigfUB3rOzxiGzgv2AwnLlGO',
        'uezlzhG',
        'j3KNicHMB3iGEwvZkq',
        'y05ADum',
        'ELLsyvO',
        'nhWZFdb8mNWX',
        'EM5LBMy',
        'BwXOywnR',
        'sw52ywXPzcbizxGGs2v5',
        'B0DmAxi',
        'vhvhtMu',
        'shj0zfa',
        'C0LsrhC',
        'D1Hhuhe',
        'tKvUtKm',
        'qxv0BYbmB2DPBIbfBMfIBgvK',
        'D1nvrK0',
        'tNbXvNa',
        'qNz0D1u',
        'vhn3vwq',
        'Agv4s2v5',
        'g1S0Bq',
        'ELLWALO',
        'uLfjBuS',
        'g1SXoZmYBq',
        'CwzyswC',
        'EKDTB2u',
        'qLvnEvC',
        'icaGicaGicaGicaGicdILzek',
        'z01zvhO',
        'C2XPy2u',
        'shrnseC',
        'ChjLzML4vgv4Da',
        'ywrmAxC',
        'rMfPBgvKihrVigLUC3rHBgWGrgvWzw5Kzw5JAwvZ',
        'wMLLsfC',
        'tvnhv2C',
        'sMHHBLi',
        'cIaG',
        'uevfte0',
        'qLHhCwK',
        'DxrgtgO',
        'qufWwvy',
        'EvPlsfO',
        'y29TBwfUza',
        'y29IuKW',
        'yNjLAKO',
        'ru5nqMy',
        'tLbktNe',
        'B0vzD2W',
        'we9cu3y',
        'revYzu4',
        'y3jLyxrLsgfZAa',
        'ogm2otC2ztvIntqXmdqXnwjKztKWogjKngrLzte1zgzImty3ytLJodCZzMm0yMi4ytGXzJzMmMfIndq4ytKXoa',
        'vKz5wfq',
        'DKHJrg4',
        'wwXIuNO',
        'Cw9HEgG',
        'swXxDvy',
        'EKnRAMW',
        'sNHIvMi',
        'DgvZDa',
        'y3j5ChrV',
        'wYTD',
        'uNvUia',
        'mte1otK2m2rzuNrmEa',
        'shvwsg8',
        'zgvbyKy',
        'txv6sM4',
        'yurIBgq',
        'vu1pwfa',
        'CwjLtK0',
        'DM1eyNe',
        'ie5VDcbgB3vUzaO',
        'z1fstxC',
        'Au1Rsg4',
        'sg5ZB0K',
        'j3rLCM11Ec1Zzxr1Cc1ZDg9YywDLjWO',
        't1rSq1G',
        'AxPAwgG',
        't2PgCMS',
        'r3rzCLq',
        'zvnXAxq',
        'twP3ruC',
        'wu9vienbtIbot1CGt1bftIbzt1vsie1pqKLmrsbmruDftKrtiefqua',
        'ywrTAw5lzxKY',
        'ChjVBxb0',
        'BgLXqwu',
        'ruTds1y',
        'yMTwswq',
        'uKXdwuu',
        'qLvPq1G',
        'DvHXv2C',
        'l2rHDgeVzgf0ys9JB20UDgvYBxv4l2zPBgvZl2HVBwuVlMnHy2HLlW',
        'r3Hqr3O',
        'vejnzMe',
        'Bfzzzxi',
        'CfL5ELi',
        'u21cBxm',
        'vwjmALG',
        'Au5ezLO',
        'qvPoqKG',
        'ierLCgvUzgvUy3K',
        'wvvlwei',
        'uuTSvvO',
        'Bg9bsxO',
        'sezjBuO',
        'v01TD2G',
        'ru5bqKXfierbtufhrsbiqunl'
    ];
    _0x2dee = function () {
        return _0x4798d9;
    };
    return _0x2dee();
}
!_0x49db60[_0x526cfa(0x152)](MLData) && (console[_0x526cfa(0x2d8)](error + _0x526cfa(0x25d)), process[_0x526cfa(0x116)]());
!_0x49db60[_0x526cfa(0x152)](MLDocuments) && (console[_0x526cfa(0x2d8)](error + _0x526cfa(0x9d)), process[_0x526cfa(0x116)]());
async function InstallDependenciesAndPackages(_0x2eb0f1) {
    const _0x3631e0 = _0x526cfa, _0x5a38ed = {
            'RCjTI': function (_0x33129b, _0x286320, _0x25ab18) {
                return _0x33129b(_0x286320, _0x25ab18);
            },
            'UGoNJ': _0x3631e0(0x246),
            'OmEWx': function (_0x4f90fc, _0x1ee72f) {
                return _0x4f90fc + _0x1ee72f;
            },
            'PXbkV': _0x3631e0(0x1db),
            'VdQEc': function (_0xcb03ca, _0x151f91) {
                return _0xcb03ca + _0x151f91;
            },
            'UYtMw': function (_0xd2cb60) {
                return _0xd2cb60();
            },
            'gSNeL': _0x3631e0(0x1ee),
            'uTSiW': function (_0x1e5a3d, _0x452905) {
                return _0x1e5a3d(_0x452905);
            },
            'tNGOR': _0x3631e0(0x133),
            'donSc': function (_0x43c4da, _0x5b46bf) {
                return _0x43c4da + _0x5b46bf;
            },
            'HzlvJ': _0x3631e0(0x2e2),
            'UNDoy': function (_0x5c6c50, _0x1c3de8) {
                return _0x5c6c50 === _0x1c3de8;
            },
            'vHcDn': _0x3631e0(0x222),
            'NpqVp': _0x3631e0(0x214),
            'DdNkr': function (_0xe0e593, _0x1d3f1f) {
                return _0xe0e593(_0x1d3f1f);
            },
            'Oiatb': _0x3631e0(0x2dd),
            'bwxHy': _0x3631e0(0x263),
            'YlbRz': function (_0x3d126e, _0x3ee3c4) {
                return _0x3d126e !== _0x3ee3c4;
            },
            'bsDJF': _0x3631e0(0x11c),
            'wWmQM': _0x3631e0(0x109),
            'NqXrt': _0x3631e0(0xb5),
            'NSYwB': _0x3631e0(0x158),
            'dqwJv': function (_0x199b42, _0x2ded48, _0x5e3156) {
                return _0x199b42(_0x2ded48, _0x5e3156);
            },
            'jwLgY': function (_0x1204cd, _0x2e0563) {
                return _0x1204cd === _0x2e0563;
            },
            'dMEfL': _0x3631e0(0x23e),
            'TBMfa': _0x3631e0(0x22f),
            'ECteT': function (_0x2dd820, _0x2c598c) {
                return _0x2dd820 + _0x2c598c;
            }
        };
    if (!_0x49db60[_0x3631e0(0x152)](NodeModules)) {
        if (_0x5a38ed[_0x3631e0(0x29b)](_0x5a38ed[_0x3631e0(0x1f0)], _0x5a38ed[_0x3631e0(0x1ca)])) {
            _0x54e92e[_0x3631e0(0x2d8)](_0xda0857 + _0x3631e0(0x141) + _0x2f57f6 + _0x1d1031 + _0x412876[_0x3631e0(0x22e)]() + _0x473b5e + _0x3eaa55 + _0x3631e0(0x21f));
            try {
                _0x5a38ed[_0x3631e0(0x16a)](_0x30a3a3, _0x3631e0(0xa7) + _0x41e6a0, { 'stdio': _0x5a38ed[_0x3631e0(0x1ae)] }), _0x37e0fd[_0x3631e0(0x2d8)]('' + _0x24a251 + _0x2cdd26 + _0x39e330 + _0x4d5df6[_0x3631e0(0x22e)]() + _0x5b90de + _0x19d9ab + _0x3631e0(0x227));
            } catch (_0x129b86) {
                _0x1be022[_0x3631e0(0x2d8)](_0x5a38ed[_0x3631e0(0xeb)](_0x385e79, _0x5a38ed[_0x3631e0(0xad)])), _0x710ec5[_0x3631e0(0x2d8)](_0x5a38ed[_0x3631e0(0xeb)](_0x1a9c77, '' + _0x129b86)), _0x247904[_0x3631e0(0x116)]();
            }
        } else
            await _0x5a38ed[_0x3631e0(0x236)](utilExec, _0x3631e0(0x295) + NodeModules);
    }
    for (const _0x2a4e95 of _0x2eb0f1) {
        if (_0x5a38ed[_0x3631e0(0x29b)](_0x5a38ed[_0x3631e0(0x25f)], _0x5a38ed[_0x3631e0(0x2a6)]))
            return new _0x17eebf(_0x473e5f => _0x34d52e(_0x473e5f, _0x1b0773));
        else {
            const _0x449f75 = '' + NodeModules + _0x2a4e95;
            if (!_0x49db60[_0x3631e0(0x152)](_0x449f75)) {
                if (_0x5a38ed[_0x3631e0(0x1f1)](_0x5a38ed[_0x3631e0(0x1b3)], _0x5a38ed[_0x3631e0(0x2a8)])) {
                    console[_0x3631e0(0x2d8)](info + _0x3631e0(0x141) + yellow + underline + _0x2a4e95[_0x3631e0(0x22e)]() + reset + white + _0x3631e0(0x21f));
                    try {
                        _0x5a38ed[_0x3631e0(0x1f1)](_0x5a38ed[_0x3631e0(0x24d)], _0x5a38ed[_0x3631e0(0x169)]) ? (_0x5a38ed[_0x3631e0(0xe2)](execSync, _0x3631e0(0xa7) + _0x2a4e95, { 'stdio': _0x5a38ed[_0x3631e0(0x1ae)] }), console[_0x3631e0(0x2d8)]('' + info + yellow + underline + _0x2a4e95[_0x3631e0(0x22e)]() + reset + white + _0x3631e0(0x227))) : (_0x3a2875[_0x3631e0(0x2d8)](_0x5a38ed[_0x3631e0(0x19c)](_0xe07196, _0x5a38ed[_0x3631e0(0xeb)](_0x126553, _0x50c580) + _0x3631e0(0x2ca) + _0x5a38ed[_0x3631e0(0x19c)](_0x2a0713, _0x136603) + _0x3631e0(0x2e7))), _0x1002a6[_0x3631e0(0x116)]());
                    } catch (_0x363b49) {
                        _0x5a38ed[_0x3631e0(0xf7)](_0x5a38ed[_0x3631e0(0x288)], _0x5a38ed[_0x3631e0(0x218)]) ? _0x5a38ed[_0x3631e0(0x15f)](_0x5b1c04) : (console[_0x3631e0(0x2d8)](_0x5a38ed[_0x3631e0(0xb7)](info, _0x5a38ed[_0x3631e0(0xad)])), console[_0x3631e0(0x2d8)](_0x5a38ed[_0x3631e0(0x28a)](error, '' + _0x363b49)), process[_0x3631e0(0x116)]());
                    }
                } else {
                    _0x409a3f[_0x3631e0(0xb6)](_0x56c51a, !![], !![], _0x5a38ed[_0x3631e0(0x2ba)]);
                    try {
                        _0x5a38ed[_0x3631e0(0xee)](_0x4fb210, _0x3631e0(0x168) + _0x15331c[_0x3631e0(0x281)](_0x39b4ce[_0x3deef0][_0x5a38ed[_0x3631e0(0x1aa)]]) + '\x27\x20' + _0x10782b);
                    } catch (_0x3e4ffe) {
                        _0x1271b1[_0x3631e0(0x2d8)](_0x5a38ed[_0x3631e0(0xb7)](_0x598ffa, _0x3631e0(0x2fb) + _0x316635 + _0x40d93e[_0x5ee91e][_0x5a38ed[_0x3631e0(0x1aa)]][_0x3631e0(0x1d7)](_0x12684e, -0xa)[_0x3631e0(0x281)](_0x5a38ed[_0x3631e0(0xd0)]))), _0x730145[_0x3631e0(0x116)]();
                    }
                }
            }
        }
    }
    console[_0x3631e0(0x2d8)](_0x5a38ed[_0x3631e0(0x19c)](info, _0x3631e0(0xf6)));
}
await InstallDependenciesAndPackages(RequiredDependencies);
const {default: inquirer} = await import(_0x526cfa(0x2cf)), {default: ora} = await import(_0x526cfa(0x301)), {default: figlet} = await import(_0x526cfa(0x26b)), {default: crypto} = await import(_0x526cfa(0x1f7)), {default: AdmZip} = await import(_0x526cfa(0x9a));
let loading = ora({
    'prefixText': info + _0x526cfa(0x174),
    'color': _0x526cfa(0x10e),
    'spinner': _0x526cfa(0xe0),
    'interval': 0x50
});
function createBanner(_0x42ecdf, _0x1a3ad2 = _0x526cfa(0x238), _0x3d5057 = green) {
    const _0x1ab79e = _0x526cfa, _0x1dfd5d = {
            'LKHmt': function (_0x53f1eb, _0x1f151c) {
                return _0x53f1eb + _0x1f151c;
            },
            'NPJNq': function (_0x4eb0fc, _0x5ca955) {
                return _0x4eb0fc + _0x5ca955;
            }
        }, _0x344529 = figlet[_0x1ab79e(0x1a7)](_0x42ecdf, _0x1a3ad2);
    return _0x1dfd5d[_0x1ab79e(0x12b)](_0x1dfd5d[_0x1ab79e(0x1e9)](_0x3d5057, _0x344529), reset);
}
class prompts {
    static [_0x526cfa(0x100)] = {
        'name': _0x526cfa(0x1e5),
        'type': _0x526cfa(0xfe),
        'prefix': '',
        'message': ask + _0x526cfa(0x23d),
        'validate': command => {
            const _0x1c3eac = _0x526cfa, xUfgTL = {
                    'zYRaZ': function (x, y) {
                        return x === y;
                    },
                    'FXaBM': function (x, y) {
                        return x >= y;
                    },
                    'CAMNl': function (x, y) {
                        return x <= y;
                    },
                    'JSrNV': function (x, y) {
                        return x !== y;
                    },
                    'jSTeC': _0x1c3eac(0x113),
                    'llkBe': function (x, y) {
                        return x + y;
                    },
                    'oiOVa': function (x, y) {
                        return x + y;
                    },
                    'kxYHm': function (x, y) {
                        return x + y;
                    },
                    'CkzYK': _0x1c3eac(0x24a),
                    'sJKas': _0x1c3eac(0xa5)
                };
            if (xUfgTL[_0x1c3eac(0x1bd)](command[_0x1c3eac(0x26a)](), '') || !/\d/[_0x1c3eac(0x1f6)](command) || (xUfgTL[_0x1c3eac(0x257)](command, 0x4) || xUfgTL[_0x1c3eac(0x195)](command, 0x0))) {
                if (xUfgTL[_0x1c3eac(0x242)](xUfgTL[_0x1c3eac(0x2ee)], xUfgTL[_0x1c3eac(0x2ee)]))
                    _0x5664ef[_0x1c3eac(0x2d8)](_0x28fa32), _0x1ca78f[_0x1c3eac(0x116)]();
                else
                    return xUfgTL[_0x1c3eac(0x125)](xUfgTL[_0x1c3eac(0x1a9)](xUfgTL[_0x1c3eac(0x1a9)](xUfgTL[_0x1c3eac(0x226)]('\x0a', error), xUfgTL[_0x1c3eac(0xb1)]), info), xUfgTL[_0x1c3eac(0x27d)]);
            }
            return !![];
        }
    };
    static [_0x526cfa(0x199)] = {
        'name': _0x526cfa(0x1cd),
        'type': _0x526cfa(0xfe),
        'prefix': '',
        'message': ask + _0x526cfa(0x2b0) + yellow + _0x526cfa(0x10d) + white + '~#',
        'validate': async hexKey => {
            const _0x1ca9b5 = _0x526cfa, NoXVqJ = {
                    'sIRDw': function (x, y) {
                        return x + y;
                    },
                    'eLXbo': function (x, y) {
                        return x + y;
                    },
                    'rBcdM': function (x, y) {
                        return x + y;
                    },
                    'LkGuC': function (x, y) {
                        return x + y;
                    },
                    'EKCKV': function (x, y) {
                        return x + y;
                    },
                    'RWpCh': function (x, y) {
                        return x + y;
                    },
                    'iMHkK': function (callee, param1) {
                        return callee(param1);
                    },
                    'xgkDl': _0x1ca9b5(0x2ec),
                    'HzCvt': function (x, y) {
                        return x === y;
                    },
                    'ApYRk': function (x, y) {
                        return x >= y;
                    },
                    'XZrKm': function (x, y) {
                        return x <= y;
                    },
                    'qVgBz': function (x, y) {
                        return x + y;
                    },
                    'deAbF': function (x, y) {
                        return x + y;
                    },
                    'OrmdF': _0x1ca9b5(0x24a),
                    'JJZRl': _0x1ca9b5(0xa5),
                    'ZieHW': _0x1ca9b5(0x133),
                    'JnmHL': _0x1ca9b5(0x2e2),
                    'cOziS': function (x, y) {
                        return x + y;
                    },
                    'DVjdk': function (x, y) {
                        return x + y;
                    },
                    'BXGqi': _0x1ca9b5(0x1b4),
                    'NXWmZ': function (x, y) {
                        return x + y;
                    },
                    'MSGWg': function (x, y) {
                        return x + y;
                    },
                    'qkpww': function (x, y) {
                        return x + y;
                    },
                    'jsigk': _0x1ca9b5(0x25d),
                    'hkBpG': function (x, y) {
                        return x !== y;
                    },
                    'iMkHn': _0x1ca9b5(0x259),
                    'JYkmj': function (x, y) {
                        return x + y;
                    },
                    'Mvlwb': function (x, y) {
                        return x === y;
                    },
                    'RmSqv': _0x1ca9b5(0x116),
                    'BSVCa': function (x, y) {
                        return x !== y;
                    },
                    'rqkxT': _0x1ca9b5(0x28e),
                    'ujYsV': _0x1ca9b5(0x1ef),
                    'uviNA': function (x, y) {
                        return x === y;
                    },
                    'nbBVo': _0x1ca9b5(0x248),
                    'kyTIG': function (x, y) {
                        return x + y;
                    },
                    'RxFfR': function (x, y) {
                        return x + y;
                    },
                    'qbeNM': function (x, y) {
                        return x + y;
                    },
                    'lqEsr': function (x, y) {
                        return x + y;
                    },
                    'VwRNP': function (x, y) {
                        return x + y;
                    },
                    'pfhgj': function (x, y) {
                        return x + y;
                    },
                    'qjHzg': function (x, y) {
                        return x + y;
                    },
                    'wBUay': function (x, y) {
                        return x === y;
                    },
                    'OcGuj': _0x1ca9b5(0x18b),
                    'ffoXC': function (x, y) {
                        return x !== y;
                    },
                    'nNBsk': _0x1ca9b5(0xd5),
                    'xqEOT': _0x1ca9b5(0x180),
                    'Mtiks': function (callee) {
                        return callee();
                    },
                    'xdzdf': function (x, y) {
                        return x === y;
                    },
                    'glPfb': _0x1ca9b5(0x2e8),
                    'bssIu': _0x1ca9b5(0x20b),
                    'YUKXB': _0x1ca9b5(0x251),
                    'BvhOd': _0x1ca9b5(0x20e),
                    'MjwEG': function (x, y) {
                        return x !== y;
                    },
                    'iOEnk': _0x1ca9b5(0x21d),
                    'nEKpi': _0x1ca9b5(0x2ea),
                    'vplrq': _0x1ca9b5(0xf0),
                    'AApYV': _0x1ca9b5(0x186),
                    'hLElh': _0x1ca9b5(0x1e7),
                    'hrdoC': _0x1ca9b5(0x29e),
                    'LPxar': _0x1ca9b5(0x2c3),
                    'CbUrG': function (x, y) {
                        return x !== y;
                    },
                    'oVQSi': _0x1ca9b5(0xcb),
                    'HfcyZ': _0x1ca9b5(0x2e3),
                    'hzqpW': function (x, y) {
                        return x + y;
                    },
                    'RQImK': function (x, y) {
                        return x + y;
                    },
                    'BKlnT': function (x, y) {
                        return x + y;
                    },
                    'YQzuD': function (x, y) {
                        return x + y;
                    },
                    'bkVId': function (x, y) {
                        return x + y;
                    },
                    'kdjYr': function (callee) {
                        return callee();
                    },
                    'Ddgmc': _0x1ca9b5(0xdf),
                    'aDbld': _0x1ca9b5(0x2d7),
                    'UbIPb': function (x, y) {
                        return x + y;
                    },
                    'HYudR': function (x, y) {
                        return x + y;
                    },
                    'nQhVg': function (x, y) {
                        return x + y;
                    },
                    'UKpAo': function (x, y) {
                        return x + y;
                    },
                    'PnEeY': function (x, y) {
                        return x !== y;
                    },
                    'cCLMV': _0x1ca9b5(0x231),
                    'GQurN': _0x1ca9b5(0x2f2),
                    'vGeqi': function (x, y) {
                        return x + y;
                    },
                    'VHqnv': function (x, y) {
                        return x + y;
                    },
                    'aXrFs': function (x, y) {
                        return x + y;
                    },
                    'wwjty': function (x, y) {
                        return x + y;
                    }
                };
            if (NoXVqJ[_0x1ca9b5(0x2c4)](hexKey[_0x1ca9b5(0x26a)](), '')) {
                if (NoXVqJ[_0x1ca9b5(0x19e)](NoXVqJ[_0x1ca9b5(0x204)], NoXVqJ[_0x1ca9b5(0x204)]))
                    _0x579b9d[_0x1ca9b5(0xa8)](_0x69a2ff);
                else
                    return NoXVqJ[_0x1ca9b5(0x268)](error, _0x1ca9b5(0x1c1));
            }
            if (NoXVqJ[_0x1ca9b5(0x2c4)](hexKey[_0x1ca9b5(0x2d3)](), 'e') || NoXVqJ[_0x1ca9b5(0xe1)](hexKey[_0x1ca9b5(0x2d3)](), NoXVqJ[_0x1ca9b5(0x120)]))
                return NoXVqJ[_0x1ca9b5(0xbf)](NoXVqJ[_0x1ca9b5(0x9b)], NoXVqJ[_0x1ca9b5(0x11a)]) ? !![] : '\x0a' + _0x203153 + _0x1ca9b5(0xda) + NoXVqJ[_0x1ca9b5(0x1c5)](NoXVqJ[_0x1ca9b5(0xa1)](_0x10e729, _0x469a09), _0x476ca2) + _0x1ca9b5(0x2e8) + NoXVqJ[_0x1ca9b5(0xa1)](_0x5bf831, _0x3d394a) + _0x1ca9b5(0x266) + _0x126cf3 + NoXVqJ[_0x1ca9b5(0x13c)](_0x2548cc, _0x41354a) + _0x1ca9b5(0x185) + NoXVqJ[_0x1ca9b5(0x105)](_0x4a4442, _0x50e1c5) + _0x1ca9b5(0x143) + NoXVqJ[_0x1ca9b5(0xa1)](NoXVqJ[_0x1ca9b5(0x211)](_0x6d1c5f, _0x1d211b), _0x361a33) + _0x1ca9b5(0x2a9) + NoXVqJ[_0x1ca9b5(0x2cc)](_0x50b199, _0x5ec648) + _0x1ca9b5(0x25b);
            if (NoXVqJ[_0x1ca9b5(0x25c)](hexKey[_0x1ca9b5(0x2d3)](), 'h')) {
                if (NoXVqJ[_0x1ca9b5(0x19e)](NoXVqJ[_0x1ca9b5(0x11b)], NoXVqJ[_0x1ca9b5(0x11b)]))
                    NoXVqJ[_0x1ca9b5(0xc1)](_0x2e1ef3, NoXVqJ[_0x1ca9b5(0x14f)]);
                else
                    return '\x0a' + green + _0x1ca9b5(0xda) + NoXVqJ[_0x1ca9b5(0x240)](NoXVqJ[_0x1ca9b5(0x29c)](info, yellow), underline) + _0x1ca9b5(0x2e8) + NoXVqJ[_0x1ca9b5(0x200)](reset, white) + _0x1ca9b5(0x266) + info + NoXVqJ[_0x1ca9b5(0x2a1)](yellow, underline) + _0x1ca9b5(0x185) + NoXVqJ[_0x1ca9b5(0x129)](reset, white) + _0x1ca9b5(0x143) + NoXVqJ[_0x1ca9b5(0x132)](NoXVqJ[_0x1ca9b5(0x132)](info, yellow), underline) + _0x1ca9b5(0x2a9) + NoXVqJ[_0x1ca9b5(0x280)](reset, white) + _0x1ca9b5(0x25b);
            }
            if (NoXVqJ[_0x1ca9b5(0xd9)](hexKey[_0x1ca9b5(0x2d3)](), 'b') || NoXVqJ[_0x1ca9b5(0x25c)](hexKey[_0x1ca9b5(0x2d3)](), NoXVqJ[_0x1ca9b5(0x2ed)])) {
                if (NoXVqJ[_0x1ca9b5(0x2bd)](NoXVqJ[_0x1ca9b5(0x103)], NoXVqJ[_0x1ca9b5(0x17a)]))
                    NoXVqJ[_0x1ca9b5(0x17e)](FeedBack), process[_0x1ca9b5(0x116)]();
                else {
                    if (NoXVqJ[_0x1ca9b5(0x2c4)](_0x1edc28[_0x1ca9b5(0x26a)](), '') || !/\d/[_0x1ca9b5(0x1f6)](_0x297a5b) || (NoXVqJ[_0x1ca9b5(0x119)](_0x41a464, 0x4) || NoXVqJ[_0x1ca9b5(0x126)](_0x5a7ca3, 0x0)))
                        return NoXVqJ[_0x1ca9b5(0x211)](NoXVqJ[_0x1ca9b5(0x271)](NoXVqJ[_0x1ca9b5(0x1fc)](NoXVqJ[_0x1ca9b5(0x271)]('\x0a', _0x1b7054), NoXVqJ[_0x1ca9b5(0xfd)]), _0x1324d6), NoXVqJ[_0x1ca9b5(0x24c)]);
                    return !![];
                }
            }
            if (NoXVqJ[_0x1ca9b5(0xf1)](hexKey[_0x1ca9b5(0x2d3)](), NoXVqJ[_0x1ca9b5(0xab)])) {
                if (NoXVqJ[_0x1ca9b5(0x2c4)](NoXVqJ[_0x1ca9b5(0xc8)], NoXVqJ[_0x1ca9b5(0xc8)])) {
                    if (NoXVqJ[_0x1ca9b5(0x25c)](LogsParsed[NoXVqJ[_0x1ca9b5(0x220)]], await NoXVqJ[_0x1ca9b5(0x17e)](HexSystemInfo)) || NoXVqJ[_0x1ca9b5(0x2c4)](LogsParsed[NoXVqJ[_0x1ca9b5(0x10c)]], await NoXVqJ[_0x1ca9b5(0x17e)](HexSystemInfo))) {
                        if (NoXVqJ[_0x1ca9b5(0x20c)](NoXVqJ[_0x1ca9b5(0x2d5)], NoXVqJ[_0x1ca9b5(0x13a)]))
                            return !![];
                        else {
                            const _0x23fade = this[_0x1ca9b5(0x1d7)](0x0, 0x1)[_0x1ca9b5(0x289)]();
                            return NoXVqJ[_0x1ca9b5(0x271)](_0x23fade, this[_0x1ca9b5(0x1d7)](0x1, _0xc8e75f));
                        }
                    } else {
                        if (NoXVqJ[_0x1ca9b5(0x2bd)](NoXVqJ[_0x1ca9b5(0x2c5)], NoXVqJ[_0x1ca9b5(0x1e3)]))
                            return NoXVqJ[_0x1ca9b5(0x279)](NoXVqJ[_0x1ca9b5(0x1c5)]('\x0a', info), _0x1ca9b5(0xa6) + info + _0x1ca9b5(0x264));
                        else
                            _0x3c26e7[_0x1ca9b5(0x2d8)](NoXVqJ[_0x1ca9b5(0x271)](_0x347113, _0x1ca9b5(0x2fb) + _0x293c1b + _0x16c5e7[_0x428a07][NoXVqJ[_0x1ca9b5(0x1dc)]][_0x1ca9b5(0x1d7)](_0x44fad9, -0xa)[_0x1ca9b5(0x281)](NoXVqJ[_0x1ca9b5(0x189)]))), _0x1fc3af[_0x1ca9b5(0x116)]();
                    }
                } else
                    _0x2ba6cf[_0x1ca9b5(0x2d8)](NoXVqJ[_0x1ca9b5(0x13c)](_0x28c017, NoXVqJ[_0x1ca9b5(0x1fc)](_0x18983f, _0x551c6c) + _0x1ca9b5(0x2b8) + NoXVqJ[_0x1ca9b5(0x275)](_0x3c9229, _0x3c8c61) + _0x1ca9b5(0x2de))), _0x267afa[_0x1ca9b5(0x116)]();
            }
            try {
                if (NoXVqJ[_0x1ca9b5(0x2bd)](NoXVqJ[_0x1ca9b5(0x114)], NoXVqJ[_0x1ca9b5(0x2be)])) {
                    if (!LogsParsed[NoXVqJ[_0x1ca9b5(0xb0)]][_0x1ca9b5(0x27f)](hexKey) && NoXVqJ[_0x1ca9b5(0xbf)](hexKey, await NoXVqJ[_0x1ca9b5(0x17e)](HexSystemInfo))) {
                        if (NoXVqJ[_0x1ca9b5(0x2db)](NoXVqJ[_0x1ca9b5(0x196)], NoXVqJ[_0x1ca9b5(0x12a)]))
                            return NoXVqJ[_0x1ca9b5(0xde)](NoXVqJ[_0x1ca9b5(0x1d0)]('\x0a', info), '' + NoXVqJ[_0x1ca9b5(0x290)](yellow, underline) + NoXVqJ[_0x1ca9b5(0x149)](NoXVqJ[_0x1ca9b5(0x212)](hexKey, reset), white) + _0x1ca9b5(0x202) + info + _0x1ca9b5(0x264));
                        else
                            _0x7c3fec[_0x1ca9b5(0x2d8)](NoXVqJ[_0x1ca9b5(0x25e)](_0x2e8f30, _0x1ca9b5(0x10a))), _0x595c90[_0x1ca9b5(0x116)]();
                    } else {
                        if (!LogsParsed[NoXVqJ[_0x1ca9b5(0xb0)]][_0x1ca9b5(0x27f)](hexKey) && NoXVqJ[_0x1ca9b5(0xe1)](hexKey, await NoXVqJ[_0x1ca9b5(0x104)](HexSystemInfo)) || LogsParsed[NoXVqJ[_0x1ca9b5(0xb0)]][_0x1ca9b5(0x27f)](hexKey) && NoXVqJ[_0x1ca9b5(0x19e)](hexKey, await NoXVqJ[_0x1ca9b5(0x104)](HexSystemInfo))) {
                            if (NoXVqJ[_0x1ca9b5(0xf1)](NoXVqJ[_0x1ca9b5(0xd1)], NoXVqJ[_0x1ca9b5(0x1fe)]))
                                _0x26934f[NoXVqJ[_0x1ca9b5(0x1e1)]] = ![];
                            else
                                return NoXVqJ[_0x1ca9b5(0x115)](NoXVqJ[_0x1ca9b5(0xdd)]('\x0a', info), '' + NoXVqJ[_0x1ca9b5(0xdc)](NoXVqJ[_0x1ca9b5(0x280)](yellow, underline), hexKey) + NoXVqJ[_0x1ca9b5(0x177)](reset, white) + _0x1ca9b5(0x1b9) + info + _0x1ca9b5(0x264));
                        }
                    }
                } else
                    _0x30ca36[_0x1ca9b5(0x2d8)](NoXVqJ[_0x1ca9b5(0xe5)](_0x37f8af, _0x4ccbac)), _0x1c7527[_0x1ca9b5(0x2d8)](NoXVqJ[_0x1ca9b5(0x1dd)](_0xa8e1b0, _0x1ca9b5(0x2d6) + NoXVqJ[_0x1ca9b5(0x279)](_0xcd482e, _0x4cc679) + _0x1ca9b5(0x2b8) + NoXVqJ[_0x1ca9b5(0x275)](_0x44a876, _0x50db1b) + _0x1ca9b5(0x1b0))), _0xb0e9ca[_0x1ca9b5(0x116)]();
            } catch ($) {
                if (NoXVqJ[_0x1ca9b5(0x2b7)](NoXVqJ[_0x1ca9b5(0x16f)], NoXVqJ[_0x1ca9b5(0xe4)]))
                    return NoXVqJ[_0x1ca9b5(0x24e)](NoXVqJ[_0x1ca9b5(0x276)](NoXVqJ[_0x1ca9b5(0x25e)](NoXVqJ[_0x1ca9b5(0x177)](NoXVqJ[_0x1ca9b5(0x298)]('\x0a', error), $), '\x0a'), info), _0x1ca9b5(0x2d6) + NoXVqJ[_0x1ca9b5(0x1fc)](yellow, underline) + _0x1ca9b5(0x2b8) + NoXVqJ[_0x1ca9b5(0x112)](reset, white) + _0x1ca9b5(0x1b0));
                else
                    _0x17ad04[_0x1ca9b5(0x2d8)](NoXVqJ[_0x1ca9b5(0x13c)](_0x42a6a7, NoXVqJ[_0x1ca9b5(0x2a4)])), _0x4656ae[_0x1ca9b5(0x116)]();
            }
            return !![];
        }
    };
    static [_0x526cfa(0x1ad)] = {
        'name': _0x526cfa(0x1e5),
        'input': _0x526cfa(0xfe),
        'prefix': '',
        'message': ask + _0x526cfa(0x23d),
        'validate': command => {
            const _0x105e3 = _0x526cfa, blIlYL = {
                    'eJVaB': function (x, y) {
                        return x + y;
                    },
                    'BvtwU': function (x, y) {
                        return x + y;
                    },
                    'mPInN': function (x, y) {
                        return x + y;
                    },
                    'jdZrf': function (x, y) {
                        return x + y;
                    },
                    'vKmBX': function (x, y) {
                        return x === y;
                    },
                    'HnsoI': function (x, y) {
                        return x >= y;
                    },
                    'suSmY': function (x, y) {
                        return x <= y;
                    },
                    'GlDjh': function (x, y) {
                        return x !== y;
                    },
                    'zTaAG': _0x105e3(0x1fb),
                    'kGpyy': function (x, y) {
                        return x + y;
                    },
                    'XWOmI': function (x, y) {
                        return x + y;
                    },
                    'NWeCX': _0x105e3(0x24a),
                    'TswUd': _0x105e3(0xa5)
                };
            if (blIlYL[_0x105e3(0xf5)](command[_0x105e3(0x26a)](), '') || !/\d/[_0x105e3(0x1f6)](command) || (blIlYL[_0x105e3(0x205)](command, 0x4) || blIlYL[_0x105e3(0x173)](command, 0x0)))
                return blIlYL[_0x105e3(0x108)](blIlYL[_0x105e3(0x166)], blIlYL[_0x105e3(0x166)]) ? blIlYL[_0x105e3(0x244)](blIlYL[_0x105e3(0x1cb)]('\x0a', _0x4c81ad), '' + blIlYL[_0x105e3(0x1cb)](blIlYL[_0x105e3(0x28b)](_0x126340, _0x12f5f9), _0x42d87a) + blIlYL[_0x105e3(0xf9)](_0x143257, _0x236c5c) + _0x105e3(0x1b9) + _0x20e729 + _0x105e3(0x264)) : blIlYL[_0x105e3(0x130)](blIlYL[_0x105e3(0x2cb)](blIlYL[_0x105e3(0x2cb)](blIlYL[_0x105e3(0x1cb)]('\x0a', error), blIlYL[_0x105e3(0x17f)]), info), blIlYL[_0x105e3(0x1cc)]);
            return !![];
        }
    };
    static [_0x526cfa(0x1b1)] = {
        'name': _0x526cfa(0x1b1),
        'type': _0x526cfa(0xfe),
        'prefix': '',
        'message': ask + _0x526cfa(0x285)
    };
    static [_0x526cfa(0x1b4)] = {
        'name': _0x526cfa(0x1b4),
        'type': _0x526cfa(0xfe),
        'prefix': '',
        'message': ask + _0x526cfa(0x95)
    };
}
function delay(_0x583e55) {
    return new Promise(_0x19b2d7 => setTimeout(_0x19b2d7, _0x583e55));
}
async function animate(_0x3cc537, _0x278907 = 0x3) {
    const _0x26a61e = _0x526cfa, _0x1a7d55 = {
            'PENKj': function (_0x2f1d9e) {
                return _0x2f1d9e();
            },
            'ErIlR': function (_0x682b26, _0x274877) {
                return _0x682b26 !== _0x274877;
            },
            'LhOfh': _0x26a61e(0x277),
            'veJnI': function (_0x42dc30, _0x3e9e49) {
                return _0x42dc30(_0x3e9e49);
            }
        };
    _0x3cc537 = _0x3cc537[_0x26a61e(0x2cd)]();
    for (const _0x33a211 of _0x3cc537) {
        _0x1a7d55[_0x26a61e(0x15e)](_0x1a7d55[_0x26a61e(0xe9)], _0x1a7d55[_0x26a61e(0xe9)]) ? (_0x1a7d55[_0x26a61e(0x1b2)](_0xc44e50), _0x5edc60[_0x26a61e(0x116)]()) : (await _0x1a7d55[_0x26a61e(0x233)](delay, _0x278907), process[_0x26a61e(0x22a)][_0x26a61e(0xc9)](_0x33a211));
    }
    console[_0x26a61e(0x2d8)]();
}
async function exit() {
    const _0x322c58 = _0x526cfa, _0x4f4037 = {
            'zYpjZ': function (_0x183a7b, _0x541fd1, _0x46bf1c) {
                return _0x183a7b(_0x541fd1, _0x46bf1c);
            },
            'yQinX': function (_0x5e0e98, _0x4a9746) {
                return _0x5e0e98 + _0x4a9746;
            }
        };
    await _0x4f4037[_0x322c58(0x1cf)](animate, _0x4f4037[_0x322c58(0xaf)](info, _0x322c58(0x26d)), 0x19), await _0x4f4037[_0x322c58(0x1cf)](animate, _0x4f4037[_0x322c58(0xaf)](info, _0x322c58(0x12d)), 0x19), process[_0x322c58(0x116)]();
}
function FeedBack() {
    const _0x1b6c74 = _0x526cfa, _0x5e0c6a = {
            'qfXIg': function (_0x22a04d, _0x4f0560) {
                return _0x22a04d(_0x4f0560);
            },
            'GtYrT': _0x1b6c74(0x2ec)
        };
    _0x5e0c6a[_0x1b6c74(0x1d2)](execSync, _0x5e0c6a[_0x1b6c74(0x20a)]);
}
async function main() {
    const _0x224a34 = _0x526cfa, _0x328270 = {
            'YDTBw': function (_0x34d0e3, _0x1b75c0) {
                return _0x34d0e3 + _0x1b75c0;
            },
            'goZhe': function (_0x55161a) {
                return _0x55161a();
            },
            'qojXE': function (_0x473114, _0x4e552c) {
                return _0x473114(_0x4e552c);
            },
            'mjArj': _0x224a34(0x2a0),
            'htnwr': _0x224a34(0x261),
            'XOBSv': _0x224a34(0xb9),
            'KLrzI': _0x224a34(0x2ae),
            'EqJJC': function (_0x4ff88a) {
                return _0x4ff88a();
            },
            'HrtdP': function (_0x2f2515, _0x412a70, _0x20b967) {
                return _0x2f2515(_0x412a70, _0x20b967);
            },
            'Cshyt': _0x224a34(0x187),
            'gZrHo': _0x224a34(0x246),
            'IlWuV': function (_0x33ce0c, _0x35d730, _0x361e24) {
                return _0x33ce0c(_0x35d730, _0x361e24);
            },
            'wOuOu': _0x224a34(0x1db),
            'hkTTP': function (_0x5988ff, _0x335fd8) {
                return _0x5988ff + _0x335fd8;
            },
            'mncNS': function (_0x1316eb) {
                return _0x1316eb();
            },
            'ymFol': function (_0xcc20c8, _0x121541) {
                return _0xcc20c8(_0x121541);
            },
            'qgCeD': _0x224a34(0x1c0),
            'KPSsS': function (_0x116481, _0x7b837f) {
                return _0x116481(_0x7b837f);
            },
            'xdmae': function (_0x21fcd3, _0xdc7e19) {
                return _0x21fcd3(_0xdc7e19);
            },
            'RopWa': function (_0x3aadae, _0x51f267) {
                return _0x3aadae(_0x51f267);
            },
            'tbyhc': function (_0x50b14d, _0x2f3777) {
                return _0x50b14d === _0x2f3777;
            },
            'ztPhX': _0x224a34(0x1e4),
            'MtcSZ': _0x224a34(0x1b4),
            'zGmoe': function (_0x56ccfd, _0x3926d9) {
                return _0x56ccfd === _0x3926d9;
            },
            'ZqdGW': _0x224a34(0x213),
            'kbiNh': function (_0x4b82d6, _0x49bb63) {
                return _0x4b82d6 + _0x49bb63;
            },
            'zCkjl': _0x224a34(0x1c8),
            'KyMDl': _0x224a34(0x2c3),
            'vCnGw': function (_0x308c6d) {
                return _0x308c6d();
            },
            'SmKrB': function (_0x3ad96d, _0xbc0c8e) {
                return _0x3ad96d === _0xbc0c8e;
            },
            'ePWQJ': _0x224a34(0x251),
            'SmBms': function (_0x22eb5b) {
                return _0x22eb5b();
            },
            'YIQAj': function (_0x2e99ef, _0x1f220b) {
                return _0x2e99ef === _0x1f220b;
            },
            'dSoqm': _0x224a34(0x20e),
            'RFSIH': function (_0x3977f5, _0x965c8) {
                return _0x3977f5 !== _0x965c8;
            },
            'ZTxZZ': _0x224a34(0x201),
            'cLJKE': _0x224a34(0x22d),
            'VyTnx': function (_0x56725d, _0xc424df) {
                return _0x56725d(_0xc424df);
            },
            'utFLj': function (_0x3ebff5, _0x59595c) {
                return _0x3ebff5 * _0x59595c;
            },
            'Uohgs': function (_0x7f09f, _0x3f77ca) {
                return _0x7f09f * _0x3f77ca;
            },
            'gMYTz': _0x224a34(0x9e),
            'vYfJp': function (_0x1c9032, _0x29b1b4) {
                return _0x1c9032 !== _0x29b1b4;
            },
            'ufAMk': _0x224a34(0x1c9),
            'fFDXt': _0x224a34(0x135),
            'fsJAS': function (_0x3dc988, _0x3ec674) {
                return _0x3dc988 !== _0x3ec674;
            },
            'itFee': _0x224a34(0x145),
            'ncUHT': function (_0x447b8f, _0x33b4b6) {
                return _0x447b8f === _0x33b4b6;
            },
            'HxLOy': _0x224a34(0xc4),
            'GZpmp': _0x224a34(0x101)
        };
    _0x328270[_0x224a34(0x102)](ExecClear);
    const _0x51ee08 = _0x328270[_0x224a34(0x148)](createBanner, _0x328270[_0x224a34(0xa9)]);
    await _0x328270[_0x224a34(0xce)](animate, _0x51ee08), await _0x328270[_0x224a34(0x291)](animate, author), await _0x328270[_0x224a34(0x291)](animate, _0x224a34(0x1df) + green + _0x224a34(0x2af) + yellow + _0x224a34(0x2b3) + blue + _0x224a34(0x140) + green + _0x224a34(0x23b) + yellow + _0x224a34(0x2b3) + blue + _0x224a34(0x107) + green + _0x224a34(0xcd) + yellow + _0x224a34(0x2b3) + blue + _0x224a34(0x274));
    let {command: _0x10e82a} = await inquirer[_0x224a34(0x20f)](prompts[_0x224a34(0x100)]);
    _0x10e82a = _0x328270[_0x224a34(0x2e5)](parseInt, _0x10e82a);
    if (_0x328270[_0x224a34(0x111)](_0x10e82a, 0x1)) {
        if (_0x328270[_0x224a34(0x111)](_0x328270[_0x224a34(0x2df)], _0x328270[_0x224a34(0x2df)])) {
            if (LogsParsed[_0x328270[_0x224a34(0x2c1)]]) {
                if (_0x328270[_0x224a34(0x1d3)](_0x328270[_0x224a34(0x131)], _0x328270[_0x224a34(0x131)])) {
                    _0x328270[_0x224a34(0x1a1)](ExecClear), console[_0x224a34(0x2d8)](_0x328270[_0x224a34(0x13d)](info, _0x328270[_0x224a34(0x1f4)]));
                    if (LogsParsed[_0x328270[_0x224a34(0x2e4)]][_0x224a34(0x27f)](await _0x328270[_0x224a34(0x155)](HexSystemInfo)) || _0x328270[_0x224a34(0x9c)](LogsParsed[_0x328270[_0x224a34(0x2d1)]], await _0x328270[_0x224a34(0x21b)](HexSystemInfo)) || _0x328270[_0x224a34(0x28f)](LogsParsed[_0x328270[_0x224a34(0x127)]], await _0x328270[_0x224a34(0x2c6)](HexSystemInfo))) {
                        if (_0x328270[_0x224a34(0x286)](_0x328270[_0x224a34(0xb2)], _0x328270[_0x224a34(0x258)]))
                            loading[_0x224a34(0x183)](), await _0x328270[_0x224a34(0x232)](delay, _0x328270[_0x224a34(0x1e2)](Math[_0x224a34(0x18e)](_0x328270[_0x224a34(0xea)](Math[_0x224a34(0x2d4)](), 0x5)), 0x1388)), loading[_0x224a34(0x2f9)](), _0x328270[_0x224a34(0x155)](Start);
                        else
                            return !![];
                    } else {
                        if (_0x328270[_0x224a34(0x1d3)](_0x328270[_0x224a34(0x1d6)], _0x328270[_0x224a34(0x1d6)]))
                            console[_0x224a34(0x2d8)](_0x328270[_0x224a34(0xfa)](info, _0x224a34(0x23c) + info + _0x224a34(0x264))), process[_0x224a34(0x116)]();
                        else
                            return _0x328270[_0x224a34(0xfa)](_0x16df7f, _0x224a34(0x1c1));
                    }
                } else
                    _0x328270[_0x224a34(0x2c6)](_0x3ecc74), _0x328270[_0x224a34(0x2c6)](_0x4527b6);
            } else {
                if (_0x328270[_0x224a34(0x272)](_0x328270[_0x224a34(0x175)], _0x328270[_0x224a34(0x2c0)]))
                    _0x328270[_0x224a34(0x2c6)](Auth);
                else
                    try {
                        const _0x2da6e8 = _0x328270[_0x224a34(0xc3)](_0xd27c78, _0x328270[_0x224a34(0x190)]), _0x3bec70 = _0x328270[_0x224a34(0xc3)](_0x3e4f82, _0x328270[_0x224a34(0x269)]), _0x2c1a44 = _0x328270[_0x224a34(0xfa)](_0x2da6e8[_0x224a34(0x2cd)]()[_0x224a34(0x26a)](), _0x3bec70[_0x224a34(0x2cd)]()[_0x224a34(0x26a)]()), _0x562f32 = _0x3972c7[_0x224a34(0x1ed)](_0x328270[_0x224a34(0x1eb)])[_0x224a34(0x159)](_0x2c1a44)[_0x224a34(0x2ac)](_0x328270[_0x224a34(0x197)]);
                        return _0x562f32;
                    } catch (_0xf828de) {
                        _0x54842a[_0x224a34(0x2d8)](_0xf828de), _0x45e080[_0x224a34(0x116)]();
                    }
            }
        } else
            _0x328270[_0x224a34(0x1a1)](_0x3670fa);
    } else {
        if (_0x328270[_0x224a34(0x9c)](_0x10e82a, 0x2))
            _0x328270[_0x224a34(0x2c7)](_0x328270[_0x224a34(0x2e1)], _0x328270[_0x224a34(0x2e1)]) ? _0x328270[_0x224a34(0x1c4)](_0x37b958, _0x328270[_0x224a34(0x26f)], { 'stdio': _0x328270[_0x224a34(0x151)] }) : (_0x328270[_0x224a34(0x2c6)](FeedBack), _0x328270[_0x224a34(0x21b)](main));
        else {
            if (_0x328270[_0x224a34(0x111)](_0x10e82a, 0x3)) {
                if (_0x328270[_0x224a34(0x12e)](_0x328270[_0x224a34(0xca)], _0x328270[_0x224a34(0xc2)])) {
                    const _0x358f78 = '' + _0x34fd3c + _0x3e05d0;
                    if (!_0x373250[_0x224a34(0x152)](_0x358f78)) {
                        _0x12e12c[_0x224a34(0x2d8)](_0x20789d + _0x224a34(0x141) + _0x8b69c4 + _0x27e8a2 + _0x2dfe56[_0x224a34(0x22e)]() + _0x1a58dc + _0x33d260 + _0x224a34(0x21f));
                        try {
                            _0x328270[_0x224a34(0x1f3)](_0x606711, _0x224a34(0xa7) + _0x53dae9, { 'stdio': _0x328270[_0x224a34(0x151)] }), _0x4d582d[_0x224a34(0x2d8)]('' + _0x422093 + _0x59138f + _0x5a443b + _0x19814c[_0x224a34(0x22e)]() + _0x10dcc5 + _0x59a641 + _0x224a34(0x227));
                        } catch (_0xc85605) {
                            _0x3fef33[_0x224a34(0x2d8)](_0x328270[_0x224a34(0xfa)](_0x43069b, _0x328270[_0x224a34(0x13b)])), _0x2c66e3[_0x224a34(0x2d8)](_0x328270[_0x224a34(0x25a)](_0x38d983, '' + _0xc85605)), _0x2ea655[_0x224a34(0x116)]();
                        }
                    }
                } else
                    _0x328270[_0x224a34(0x102)](exit);
            }
        }
    }
}
async function Auth() {
    const _0x22e990 = _0x526cfa, _0x29eada = {
            'eZRlz': function (_0x118dc6) {
                return _0x118dc6();
            },
            'jqVgg': function (_0x12a2f5) {
                return _0x12a2f5();
            },
            'amPYI': function (_0x1ba47e) {
                return _0x1ba47e();
            },
            'TuGNe': function (_0x453dbf, _0x555b63) {
                return _0x453dbf + _0x555b63;
            },
            'pehLs': function (_0xcf9ec3, _0x59d40d) {
                return _0xcf9ec3 + _0x59d40d;
            },
            'euMkS': function (_0x2c556b, _0x31b9a7) {
                return _0x2c556b + _0x31b9a7;
            },
            'EsNNs': function (_0x4e49a0, _0x570f67) {
                return _0x4e49a0 + _0x570f67;
            },
            'xumXn': function (_0xf90bbd, _0x3de819) {
                return _0xf90bbd(_0x3de819);
            },
            'wHMaj': _0x22e990(0x199),
            'fDVUQ': function (_0x43ead7, _0x4a5385) {
                return _0x43ead7 === _0x4a5385;
            },
            'YelEK': function (_0xc6a802, _0xeb4af) {
                return _0xc6a802 === _0xeb4af;
            },
            'EDIqM': _0x22e990(0x116),
            'eZsKs': function (_0x4aae29, _0x4e9937) {
                return _0x4aae29 === _0x4e9937;
            },
            'BQkUz': _0x22e990(0x2b9),
            'IEYjj': _0x22e990(0x284),
            'gaRaF': function (_0x5f57b2, _0x58ab49) {
                return _0x5f57b2 * _0x58ab49;
            },
            'hUXUq': function (_0x113eaa, _0xe8aead) {
                return _0x113eaa * _0xe8aead;
            },
            'DcYJr': _0x22e990(0x1b4),
            'iRRpC': _0x22e990(0x139),
            'JMJpp': function (_0x4ba035, _0x1d4097) {
                return _0x4ba035 === _0x1d4097;
            },
            'vzycQ': function (_0x56fb4b, _0x1d8a5e) {
                return _0x56fb4b !== _0x1d8a5e;
            },
            'tAcRc': _0x22e990(0x124),
            'yVeMV': _0x22e990(0x1a8)
        };
    _0x29eada[_0x22e990(0x1a4)](ExecClear);
    const _0x2903a2 = _0x29eada[_0x22e990(0x24b)](createBanner, _0x29eada[_0x22e990(0x13f)]);
    await _0x29eada[_0x22e990(0x24b)](animate, _0x2903a2), await _0x29eada[_0x22e990(0x24b)](animate, _0x29eada[_0x22e990(0x28c)](author, '\x0a'));
    const {hexKey: _0x232f59} = await inquirer[_0x22e990(0x20f)](prompts[_0x22e990(0x199)]);
    (_0x29eada[_0x22e990(0x2dc)](_0x232f59[_0x22e990(0x2d3)](), 'e') || _0x29eada[_0x22e990(0x192)](_0x232f59[_0x22e990(0x2d3)](), _0x29eada[_0x22e990(0x18d)])) && (_0x29eada[_0x22e990(0xcc)](_0x29eada[_0x22e990(0x2bf)], _0x29eada[_0x22e990(0x253)]) ? _0x29eada[_0x22e990(0x1a4)](_0x352f2c) : await _0x29eada[_0x22e990(0x1a4)](exit));
    loading[_0x22e990(0x183)](), await _0x29eada[_0x22e990(0x24b)](delay, _0x29eada[_0x22e990(0x2d9)](Math[_0x22e990(0x18e)](_0x29eada[_0x22e990(0x2eb)](Math[_0x22e990(0x2d4)](), 0x5)), 0x1388)), loading[_0x22e990(0x2f9)]();
    if (!LogsParsed[_0x29eada[_0x22e990(0x29d)]]) {
        if (_0x29eada[_0x22e990(0x2dc)](_0x29eada[_0x22e990(0x278)], _0x29eada[_0x22e990(0x278)])) {
            const {autoLogin: _0x469f81} = await inquirer[_0x22e990(0x20f)](prompts[_0x22e990(0x1b4)]);
            _0x29eada[_0x22e990(0x1a5)](_0x469f81[_0x22e990(0x2d3)](), 'n') ? _0x29eada[_0x22e990(0x96)](_0x29eada[_0x22e990(0x287)], _0x29eada[_0x22e990(0x287)]) ? _0x29eada[_0x22e990(0x15c)](_0x19b6aa) : LogsParsed[_0x29eada[_0x22e990(0x29d)]] = ![] : _0x29eada[_0x22e990(0x96)](_0x29eada[_0x22e990(0xd7)], _0x29eada[_0x22e990(0xd7)]) ? _0x29eada[_0x22e990(0x283)](_0x1e003d) : LogsParsed[_0x29eada[_0x22e990(0x29d)]] = !![];
        } else
            try {
                _0x497aec[_0x22e990(0xa8)](_0x2111fc);
            } catch (_0x289269) {
                _0x4e30c8[_0x22e990(0x2d8)](_0x2a3915 + '\x20' + _0x289269 + '\x0a' + _0x22a929 + _0x22e990(0x1f9) + _0x29eada[_0x22e990(0x1c3)](_0x365c99, _0x44ecdc) + _0x22e990(0x206) + _0x29eada[_0x22e990(0x137)](_0x4583ee, _0x184e0c) + _0x22e990(0x11d) + _0x29eada[_0x22e990(0x1c3)](_0x1a29b9, _0x3da949) + _0x22e990(0x1bb) + _0x29eada[_0x22e990(0x15a)](_0x6d5825, _0x5daed4) + _0x22e990(0x2e0) + _0x43e3a5 + _0x22e990(0x292) + _0x29eada[_0x22e990(0x28c)](_0xf9bdb8, _0x58cc3e) + _0x22e990(0x17c) + _0x152e0b), _0xd77a23[_0x22e990(0x116)]();
            }
    }
    _0x29eada[_0x22e990(0x283)](Start);
}
async function HexSystemInfo() {
    const _0x132492 = _0x526cfa, _0x774986 = {
            'GGRgm': function (_0x3a9b3f, _0xb9fc9a) {
                return _0x3a9b3f + _0xb9fc9a;
            },
            'ZbAAS': function (_0x2b72f9, _0x36351d) {
                return _0x2b72f9 + _0x36351d;
            },
            'nPvrC': function (_0x59f047, _0x366607) {
                return _0x59f047 + _0x366607;
            },
            'lmxtT': function (_0x20442e, _0x493109) {
                return _0x20442e + _0x493109;
            },
            'DEreN': function (_0x53ce88, _0x510aad) {
                return _0x53ce88 === _0x510aad;
            },
            'InmpB': _0x132492(0x19b),
            'oZWym': function (_0x41d4f5, _0x5d4293) {
                return _0x41d4f5(_0x5d4293);
            },
            'oLkbH': _0x132492(0x2a0),
            'bSjZx': _0x132492(0x261),
            'ZYoiZ': _0x132492(0xb9),
            'pfHXB': _0x132492(0x2ae),
            'ZAzCB': _0x132492(0xe7)
        };
    try {
        if (_0x774986[_0x132492(0x1ec)](_0x774986[_0x132492(0x26c)], _0x774986[_0x132492(0x26c)])) {
            const _0x364bb9 = _0x774986[_0x132492(0x2b4)](execSync, _0x774986[_0x132492(0x1b6)]), _0x40b707 = _0x774986[_0x132492(0x2b4)](execSync, _0x774986[_0x132492(0xbb)]), _0x3f4414 = _0x774986[_0x132492(0x1a6)](_0x364bb9[_0x132492(0x2cd)]()[_0x132492(0x26a)](), _0x40b707[_0x132492(0x2cd)]()[_0x132492(0x26a)]()), _0x36f9aa = crypto[_0x132492(0x1ed)](_0x774986[_0x132492(0x2b2)])[_0x132492(0x159)](_0x3f4414)[_0x132492(0x2ac)](_0x774986[_0x132492(0xb8)]);
            return _0x36f9aa;
        } else
            _0x5ee751[_0x132492(0x2d8)](_0x774986[_0x132492(0xa0)](_0xfa92e9, _0x132492(0xfc))), _0x356f9f[_0x132492(0x116)]();
    } catch (_0x16b716) {
        _0x774986[_0x132492(0x1ec)](_0x774986[_0x132492(0x181)], _0x774986[_0x132492(0x181)]) ? (console[_0x132492(0x2d8)](_0x16b716), process[_0x132492(0x116)]()) : (_0x4c5d41[_0x132492(0x2d8)](_0x422954 + '\x20' + _0x5c6992 + '\x0a' + _0x23b942 + _0x132492(0x1f9) + _0x774986[_0x132492(0xa0)](_0x56e035, _0x653695) + _0x132492(0x206) + _0x774986[_0x132492(0x29a)](_0x4cd4e1, _0x4e4881) + _0x132492(0x11d) + _0x774986[_0x132492(0x29a)](_0x6aaa, _0x5a5236) + _0x132492(0x1bb) + _0x774986[_0x132492(0x2f1)](_0x2b0454, _0x5e0808) + _0x132492(0x2e0) + _0x260f8f + _0x132492(0x292) + _0x774986[_0x132492(0x1a6)](_0x37018b, _0x5b5351) + _0x132492(0x17c) + _0x3c37f5), _0x480bbc[_0x132492(0x116)]());
    }
}
async function Start() {
    const _0x5aa801 = _0x526cfa, _0x1ec9f0 = {
            'WFZHo': function (_0x5c14c9) {
                return _0x5c14c9();
            },
            'WdyjE': function (_0x5a9459, _0x161ca7) {
                return _0x5a9459(_0x161ca7);
            },
            'VlUCe': _0x5aa801(0x2a0),
            'vaDCS': _0x5aa801(0x261),
            'nsCuj': function (_0x231987, _0x376475) {
                return _0x231987 + _0x376475;
            },
            'UdQxh': _0x5aa801(0xb9),
            'TXSEU': _0x5aa801(0x2ae),
            'QKTiN': function (_0x2596c8, _0x3019b3) {
                return _0x2596c8 + _0x3019b3;
            },
            'zKPsp': _0x5aa801(0x1b4),
            'KsFaf': function (_0x2719cd, _0x3a081c) {
                return _0x2719cd + _0x3a081c;
            },
            'BOAcc': function (_0x5ce183, _0x3b37c5) {
                return _0x5ce183 + _0x3b37c5;
            },
            'DtDkK': function (_0x4dd131, _0x3ddf17) {
                return _0x4dd131 + _0x3ddf17;
            },
            'vJJve': function (_0x7455f, _0x3df3ad) {
                return _0x7455f === _0x3df3ad;
            },
            'vPscw': function (_0xb4c64d, _0x3d4600) {
                return _0xb4c64d >= _0x3d4600;
            },
            'cNZuC': function (_0x235665, _0xaa5ac8) {
                return _0x235665 <= _0xaa5ac8;
            },
            'ENMBf': function (_0x5ec745, _0x30eadd) {
                return _0x5ec745 + _0x30eadd;
            },
            'GrcJV': function (_0x2b9dc2, _0x21b20e) {
                return _0x2b9dc2 + _0x21b20e;
            },
            'PLqgt': function (_0x123e94, _0x437d0b) {
                return _0x123e94 + _0x437d0b;
            },
            'GsQNQ': function (_0x222e5b, _0x25ae16) {
                return _0x222e5b + _0x25ae16;
            },
            'wRIuA': _0x5aa801(0x24a),
            'Vmkiq': _0x5aa801(0xa5),
            'QKlUZ': function (_0x3b82a9) {
                return _0x3b82a9();
            },
            'MryPp': function (_0x3275fe, _0x26d67e) {
                return _0x3275fe + _0x26d67e;
            },
            'nDews': function (_0x49f438, _0x5559ee) {
                return _0x49f438 + _0x5559ee;
            },
            'qonYq': function (_0x5257b3, _0x310701) {
                return _0x5257b3 + _0x310701;
            },
            'gRxxA': function (_0x51a335, _0x414a41) {
                return _0x51a335 + _0x414a41;
            },
            'ciSqn': _0x5aa801(0x225),
            'XVUfN': function (_0x22a840, _0x301bb4, _0x50204b) {
                return _0x22a840(_0x301bb4, _0x50204b);
            },
            'HtMHG': _0x5aa801(0x246),
            'Dywuy': _0x5aa801(0x1db),
            'wqNva': function (_0x451c79, _0x378b9d) {
                return _0x451c79 + _0x378b9d;
            },
            'lVYer': function (_0x2797e2) {
                return _0x2797e2();
            },
            'qcmuC': function (_0x59b300) {
                return _0x59b300();
            },
            'GEZbh': _0x5aa801(0x1c0),
            'OjFrk': function (_0xaced21, _0x127425) {
                return _0xaced21(_0x127425);
            },
            'Fupmh': _0x5aa801(0x167),
            'wpvHO': function (_0x2eb879, _0x31b425) {
                return _0x2eb879 !== _0x31b425;
            },
            'xFKCu': _0x5aa801(0x1bf),
            'nKKXM': _0x5aa801(0xcf),
            'kaMSw': _0x5aa801(0x2ce),
            'WMmwh': _0x5aa801(0x1f2),
            'PEELM': _0x5aa801(0xd2),
            'ncwwb': _0x5aa801(0x250),
            'OTlCX': _0x5aa801(0x21a),
            'adLiw': _0x5aa801(0xac),
            'NEnNC': function (_0x487ba9, _0x26fd5f) {
                return _0x487ba9 < _0x26fd5f;
            },
            'JhanR': _0x5aa801(0x2bb),
            'ulsWH': _0x5aa801(0x133),
            'ilACj': _0x5aa801(0x210),
            'BNuXz': _0x5aa801(0x1ee),
            'ryCkP': _0x5aa801(0x243),
            'NoCgz': _0x5aa801(0x1fd),
            'SJRjq': function (_0x454f5e, _0x217334) {
                return _0x454f5e === _0x217334;
            },
            'aathJ': _0x5aa801(0xd6),
            'JThgS': _0x5aa801(0x15b),
            'ygcFO': function (_0x2932f6, _0x57fe4d) {
                return _0x2932f6 + _0x57fe4d;
            },
            'uXqWg': _0x5aa801(0x2e2),
            'lYUiu': function (_0xc3cf55, _0x314acf) {
                return _0xc3cf55 === _0x314acf;
            },
            'gQUvA': _0x5aa801(0x16d),
            'vmygj': _0x5aa801(0x18a),
            'BbFtC': function (_0x50c17e, _0x89aeba) {
                return _0x50c17e + _0x89aeba;
            },
            'kyJlG': _0x5aa801(0x223),
            'ZHXxl': _0x5aa801(0x1be),
            'Nqpmq': function (_0x1df0c0, _0x1a711a) {
                return _0x1df0c0(_0x1a711a);
            },
            'vxVmB': function (_0x3e7a60, _0x3d68b5) {
                return _0x3e7a60 * _0x3d68b5;
            },
            'kQoTN': function (_0x5c122d, _0xf5e3ea) {
                return _0x5c122d + _0xf5e3ea;
            },
            'yHEyY': function (_0x5ac1de, _0x363a1f) {
                return _0x5ac1de + _0x363a1f;
            },
            'fciPo': function (_0x5e8cb8, _0x41a776) {
                return _0x5e8cb8 + _0x41a776;
            },
            'RWAzZ': function (_0x4cd55a, _0x2a072f) {
                return _0x4cd55a + _0x2a072f;
            },
            'oqQIG': function (_0x3a2d61, _0x59867b) {
                return _0x3a2d61 + _0x59867b;
            },
            'QNgYD': _0x5aa801(0xbc),
            'oGLir': _0x5aa801(0x138),
            'bzVHf': function (_0x18f8d0, _0x44bcd6) {
                return _0x18f8d0(_0x44bcd6);
            },
            'ISuyW': function (_0x473d7b, _0x335a74) {
                return _0x473d7b + _0x335a74;
            },
            'xoDNr': function (_0x577af6, _0x464876) {
                return _0x577af6 === _0x464876;
            },
            'vsXyu': _0x5aa801(0x147),
            'tRiYX': _0x5aa801(0xef),
            'Ihpyl': function (_0x3605a1) {
                return _0x3605a1();
            },
            'JxbVb': _0x5aa801(0xb4),
            'fuEkr': function (_0x1c5ac0, _0x349855) {
                return _0x1c5ac0 < _0x349855;
            },
            'Qdrnb': function (_0x5f46cb, _0x313450) {
                return _0x5f46cb === _0x313450;
            },
            'jwaMY': _0x5aa801(0xc5),
            'rAngm': _0x5aa801(0x162),
            'fkVeT': _0x5aa801(0x270),
            'hIAFw': function (_0xacebc, _0x2f254d) {
                return _0xacebc + _0x2f254d;
            },
            'AkELO': function (_0x3046cd, _0x5880e0) {
                return _0x3046cd(_0x5880e0);
            },
            'bHasD': function (_0x4a491d, _0x3c7b13) {
                return _0x4a491d + _0x3c7b13;
            },
            'cQHLM': function (_0x3ddcb5, _0x34270b) {
                return _0x3ddcb5 * _0x34270b;
            },
            'pwHxp': function (_0x302247, _0x1a3326) {
                return _0x302247(_0x1a3326);
            },
            'gYuOK': function (_0x5affad, _0x40c898) {
                return _0x5affad === _0x40c898;
            },
            'bcADl': _0x5aa801(0x228),
            'weBZc': _0x5aa801(0x1c6),
            'UbLjX': function (_0x3ad810) {
                return _0x3ad810();
            },
            'ApvHH': function (_0x463fa5, _0x419541) {
                return _0x463fa5 === _0x419541;
            },
            'AVvoz': _0x5aa801(0x198),
            'XKWEQ': _0x5aa801(0x2f7),
            'bYgyQ': _0x5aa801(0x1b8),
            'TnTtz': _0x5aa801(0x293),
            'LUhRe': _0x5aa801(0x2f3)
        };
    _0x1ec9f0[_0x5aa801(0xf3)](ExecClear);
    const _0x42a085 = _0x1ec9f0[_0x5aa801(0x2da)](createBanner, _0x1ec9f0[_0x5aa801(0xa2)]);
    await _0x1ec9f0[_0x5aa801(0x2da)](animate, _0x42a085), await _0x1ec9f0[_0x5aa801(0x209)](animate, author);
    if (LogsParsed[_0x1ec9f0[_0x5aa801(0x172)]])
        _0x1ec9f0[_0x5aa801(0x1a3)](_0x1ec9f0[_0x5aa801(0x2a2)], _0x1ec9f0[_0x5aa801(0xfb)]) ? MLDHSTAT = _0x1ec9f0[_0x5aa801(0x265)] : _0x1ec9f0[_0x5aa801(0x1a0)](_0x1ef872);
    else {
        if (_0x1ec9f0[_0x5aa801(0x1a3)](_0x1ec9f0[_0x5aa801(0x224)], _0x1ec9f0[_0x5aa801(0x1e0)]))
            MLDHSTAT = _0x1ec9f0[_0x5aa801(0x2a3)];
        else {
            const _0x406d3b = _0x1ec9f0[_0x5aa801(0x2da)](_0x29098e, _0x1ec9f0[_0x5aa801(0x2f6)]), _0x477b33 = _0x1ec9f0[_0x5aa801(0x2da)](_0x35d8f7, _0x1ec9f0[_0x5aa801(0x154)]), _0x1ffb30 = _0x1ec9f0[_0x5aa801(0x294)](_0x406d3b[_0x5aa801(0x2cd)]()[_0x5aa801(0x26a)](), _0x477b33[_0x5aa801(0x2cd)]()[_0x5aa801(0x26a)]()), _0x53184e = _0x438c27[_0x5aa801(0x1ed)](_0x1ec9f0[_0x5aa801(0x156)])[_0x5aa801(0x159)](_0x1ffb30)[_0x5aa801(0x2ac)](_0x1ec9f0[_0x5aa801(0x229)]);
            return _0x53184e;
        }
    }
    await _0x1ec9f0[_0x5aa801(0x2da)](animate, _0x5aa801(0x1df) + green + _0x5aa801(0x2af) + yellow + _0x5aa801(0x2b3) + blue + MLDHSTAT + _0x5aa801(0x1df) + green + _0x5aa801(0x23b) + yellow + _0x5aa801(0x2b3) + blue + _0x5aa801(0x107) + green + _0x5aa801(0xcd) + yellow + _0x5aa801(0x2b3) + blue + _0x5aa801(0x274));
    let {command: _0x7fdeb8} = await inquirer[_0x5aa801(0x20f)](prompts[_0x5aa801(0x1ad)]);
    _0x7fdeb8 = _0x1ec9f0[_0x5aa801(0x209)](parseInt, _0x7fdeb8);
    if (_0x1ec9f0[_0x5aa801(0x2c8)](_0x7fdeb8, 0x1)) {
        if (_0x1ec9f0[_0x5aa801(0x1a3)](_0x1ec9f0[_0x5aa801(0xed)], _0x1ec9f0[_0x5aa801(0xed)]))
            _0x2a249e[_0x5aa801(0x2d8)](_0x1ec9f0[_0x5aa801(0x260)](_0x36c79d, _0x5aa801(0x23c) + _0x2033cf + _0x5aa801(0x264))), _0x30a6a9[_0x5aa801(0x116)]();
        else {
            if (!LogsParsed[_0x1ec9f0[_0x5aa801(0x172)]]) {
                if (_0x1ec9f0[_0x5aa801(0x2c8)](_0x1ec9f0[_0x5aa801(0x207)], _0x1ec9f0[_0x5aa801(0x1da)]))
                    _0x3dc771[_0x1ec9f0[_0x5aa801(0x26e)]] = !![];
                else {
                    const _0x4801af = new AdmZip(UnityZip), _0x404e65 = _0x4801af[_0x5aa801(0x110)]();
                    for (let _0x427f01 = 0x0; _0x1ec9f0[_0x5aa801(0x1c7)](_0x427f01, _0x404e65[_0x5aa801(0x28d)]); _0x427f01++) {
                        if (_0x1ec9f0[_0x5aa801(0x2c8)](_0x1ec9f0[_0x5aa801(0x1de)], _0x1ec9f0[_0x5aa801(0x1de)])) {
                            if (UnityFiles[_0x5aa801(0x27f)](_0x404e65[_0x427f01][_0x1ec9f0[_0x5aa801(0x234)]]) && _0x1ec9f0[_0x5aa801(0x2c8)](_0x404e65[_0x5aa801(0x28d)], 0x4)) {
                                if (_0x1ec9f0[_0x5aa801(0x2c8)](_0x1ec9f0[_0x5aa801(0x161)], _0x1ec9f0[_0x5aa801(0x161)])) {
                                    _0x4801af[_0x5aa801(0xb6)](Cache, !![], !![], _0x1ec9f0[_0x5aa801(0x2ff)]);
                                    try {
                                        if (_0x1ec9f0[_0x5aa801(0x1a3)](_0x1ec9f0[_0x5aa801(0x93)], _0x1ec9f0[_0x5aa801(0xd4)]))
                                            _0x1ec9f0[_0x5aa801(0x2da)](execSync, _0x5aa801(0x168) + Cache[_0x5aa801(0x281)](_0x404e65[_0x427f01][_0x1ec9f0[_0x5aa801(0x234)]]) + '\x27\x20' + MLDocuments);
                                        else
                                            return _0x1ec9f0[_0x5aa801(0x260)](_0x1ec9f0[_0x5aa801(0x260)](_0x1ec9f0[_0x5aa801(0xd8)](_0x1ec9f0[_0x5aa801(0xf2)](_0x1ec9f0[_0x5aa801(0x294)]('\x0a', _0x3c7b6e), _0xab573d), '\x0a'), _0x3f5958), _0x5aa801(0x2d6) + _0x1ec9f0[_0x5aa801(0xf2)](_0x531811, _0x583086) + _0x5aa801(0x2b8) + _0x1ec9f0[_0x5aa801(0x1b7)](_0xa9fd99, _0x5d8ee5) + _0x5aa801(0x1b0));
                                    } catch (_0xc0ccae) {
                                        if (_0x1ec9f0[_0x5aa801(0x273)](_0x1ec9f0[_0x5aa801(0x2a7)], _0x1ec9f0[_0x5aa801(0x16c)]))
                                            return _0x1ec9f0[_0x5aa801(0x294)](_0x1ec9f0[_0x5aa801(0xf2)]('\x0a', _0x12f85c), _0x5aa801(0xa6) + _0xadbe0e + _0x5aa801(0x264));
                                        else
                                            console[_0x5aa801(0x2d8)](_0x1ec9f0[_0x5aa801(0x2fc)](error, _0x5aa801(0x2fb) + yellow + _0x404e65[_0x427f01][_0x1ec9f0[_0x5aa801(0x234)]][_0x5aa801(0x1d7)](undefined, -0xa)[_0x5aa801(0x281)](_0x1ec9f0[_0x5aa801(0x215)]))), process[_0x5aa801(0x116)]();
                                    }
                                } else {
                                    if (_0x1ec9f0[_0x5aa801(0x2c8)](_0x21b36a[_0x5aa801(0x26a)](), '') || !/\d/[_0x5aa801(0x1f6)](_0x419985) || (_0x1ec9f0[_0x5aa801(0x18c)](_0x447e42, 0x4) || _0x1ec9f0[_0x5aa801(0x1bc)](_0x5766c8, 0x0)))
                                        return _0x1ec9f0[_0x5aa801(0x1e8)](_0x1ec9f0[_0x5aa801(0x14e)](_0x1ec9f0[_0x5aa801(0x118)](_0x1ec9f0[_0x5aa801(0x235)]('\x0a', _0x32a846), _0x1ec9f0[_0x5aa801(0x2f8)]), _0x39ae3), _0x1ec9f0[_0x5aa801(0x146)]);
                                    return !![];
                                }
                            } else
                                _0x1ec9f0[_0x5aa801(0x2ef)](_0x1ec9f0[_0x5aa801(0x241)], _0x1ec9f0[_0x5aa801(0x15d)]) ? (_0x1ec9f0[_0x5aa801(0x1a0)](_0x2b6e85), _0x1ec9f0[_0x5aa801(0x221)](_0x379267)) : (console[_0x5aa801(0x2d8)](_0x1ec9f0[_0x5aa801(0xec)](info, _0x5aa801(0x10a))), process[_0x5aa801(0x116)]());
                        } else
                            return !![];
                    }
                    for (let _0x276d52 = 0x0; _0x1ec9f0[_0x5aa801(0x1c7)](_0x276d52, UnityFiles[_0x5aa801(0x28d)]); _0x276d52++) {
                        if (_0x1ec9f0[_0x5aa801(0x1a3)](_0x1ec9f0[_0x5aa801(0x165)], _0x1ec9f0[_0x5aa801(0x165)]))
                            return _0x1ec9f0[_0x5aa801(0x14e)](_0x1ec9f0[_0x5aa801(0x2c2)]('\x0a', _0x7cdc91), '' + _0x1ec9f0[_0x5aa801(0x193)](_0x3ab628, _0x31fc66) + _0x1ec9f0[_0x5aa801(0x294)](_0x1ec9f0[_0x5aa801(0x235)](_0x2b1b1e, _0x35bae5), _0x270f74) + _0x5aa801(0x202) + _0xbe55b7 + _0x5aa801(0x264));
                        else {
                            const _0x27e635 = _0x1ec9f0[_0x5aa801(0x2b5)][_0x5aa801(0x12f)]('|');
                            let _0x5e89ee = 0x0;
                            while (!![]) {
                                switch (_0x27e635[_0x5e89ee++]) {
                                case '0':
                                    await _0x1ec9f0[_0x5aa801(0x230)](delay, _0x1ec9f0[_0x5aa801(0xf2)](Math[_0x5aa801(0x18e)](_0x1ec9f0[_0x5aa801(0x170)](Math[_0x5aa801(0x2d4)](), 0xa)), 0xfa0));
                                    continue;
                                case '1':
                                    console[_0x5aa801(0x2d8)](_0x1ec9f0[_0x5aa801(0x2d2)](info, _0x5aa801(0x256) + _0x1ec9f0[_0x5aa801(0x1a2)](yellow, UnityFiles[_0x276d52][_0x5aa801(0x1d7)](undefined, -0x14)[_0x5aa801(0x281)](_0x1ec9f0[_0x5aa801(0x215)]))));
                                    continue;
                                case '2':
                                    loading[_0x5aa801(0x2f9)]();
                                    continue;
                                case '3':
                                    loading[_0x5aa801(0x183)]();
                                    continue;
                                case '4':
                                    loading[_0x5aa801(0x1d9)] = _0x1ec9f0[_0x5aa801(0x144)](info, _0x5aa801(0x2b6) + _0x1ec9f0[_0x5aa801(0x1a2)](yellow, UnityFiles[_0x276d52][_0x5aa801(0x1d7)](undefined, -0x14)[_0x5aa801(0x281)](_0x1ec9f0[_0x5aa801(0x215)])));
                                    continue;
                                }
                                break;
                            }
                        }
                    }
                    loading[_0x5aa801(0x1d9)] = _0x1ec9f0[_0x5aa801(0x123)](info, _0x5aa801(0x22b) + _0x1ec9f0[_0x5aa801(0x179)](yellow, UnityShaderCache)), loading[_0x5aa801(0x183)](), await _0x1ec9f0[_0x5aa801(0x2da)](delay, _0x1ec9f0[_0x5aa801(0x249)](Math[_0x5aa801(0x18e)](_0x1ec9f0[_0x5aa801(0x170)](Math[_0x5aa801(0x2d4)](), 0x5)), 0xfa0)), loading[_0x5aa801(0x2f9)](), LogsParsed[_0x1ec9f0[_0x5aa801(0x172)]] = !![], _0x49db60[_0x5aa801(0x2b1)](_0x1ec9f0[_0x5aa801(0x2f5)], JSON[_0x5aa801(0xae)](LogsParsed), { 'encoding': _0x1ec9f0[_0x5aa801(0x1c2)] }), await _0x1ec9f0[_0x5aa801(0x209)](animate, _0x1ec9f0[_0x5aa801(0xd8)](info, _0x5aa801(0x20d))), await _0x1ec9f0[_0x5aa801(0x176)](animate, _0x1ec9f0[_0x5aa801(0x299)](info, _0x5aa801(0x282)));
                    const {back: _0x3bf4f1} = await inquirer[_0x5aa801(0x20f)](prompts[_0x5aa801(0x1b1)]);
                    _0x1ec9f0[_0x5aa801(0x19f)](_0x3bf4f1[_0x5aa801(0x2d3)](), 'y') ? _0x1ec9f0[_0x5aa801(0x1a3)](_0x1ec9f0[_0x5aa801(0x1ab)], _0x1ec9f0[_0x5aa801(0x1ab)]) ? _0x44cfb = _0x7e4308[_0x5aa801(0x302)](_0x5e5a83) : _0x1ec9f0[_0x5aa801(0x1a0)](Start) : _0x1ec9f0[_0x5aa801(0x2c8)](_0x1ec9f0[_0x5aa801(0x117)], _0x1ec9f0[_0x5aa801(0x117)]) ? _0x1ec9f0[_0x5aa801(0xe3)](exit) : (_0x1ec9f0[_0x5aa801(0x1a0)](_0x42da78), _0x1419e2[_0x5aa801(0x2d8)](_0x1ec9f0[_0x5aa801(0x235)](_0x3cebc5, _0x5aa801(0x2e6))), _0x1a5a91[_0x5aa801(0x116)]());
                }
            } else {
                if (_0x1ec9f0[_0x5aa801(0x19f)](_0x1ec9f0[_0x5aa801(0x1f5)], _0x1ec9f0[_0x5aa801(0x1f5)])) {
                    for (let _0x543127 = 0x0; _0x1ec9f0[_0x5aa801(0x27a)](_0x543127, UnityFiles[_0x5aa801(0x28d)]); _0x543127++) {
                        if (_0x1ec9f0[_0x5aa801(0x23f)](_0x1ec9f0[_0x5aa801(0x150)], _0x1ec9f0[_0x5aa801(0x17d)])) {
                            const _0x36ce00 = _0x2143e0[_0x5aa801(0x1a7)](_0x20e080, _0x595514);
                            return _0x1ec9f0[_0x5aa801(0x1a2)](_0x1ec9f0[_0x5aa801(0xb3)](_0x44b292, _0x36ce00), _0x292434);
                        } else {
                            const _0x2861c1 = _0x1ec9f0[_0x5aa801(0x22c)][_0x5aa801(0x12f)]('|');
                            let _0x25f87a = 0x0;
                            while (!![]) {
                                switch (_0x2861c1[_0x25f87a++]) {
                                case '0':
                                    _0x1ec9f0[_0x5aa801(0x2da)](execSync, _0x5aa801(0x255) + MLDocuments[_0x5aa801(0x281)](UnityFiles[_0x543127]) + '\x27');
                                    continue;
                                case '1':
                                    loading[_0x5aa801(0x1d9)] = _0x1ec9f0[_0x5aa801(0x14c)](info, _0x5aa801(0x22b) + UnityFiles[_0x543127]);
                                    continue;
                                case '2':
                                    await _0x1ec9f0[_0x5aa801(0xba)](delay, _0x1ec9f0[_0x5aa801(0xa3)](Math[_0x5aa801(0x18e)](_0x1ec9f0[_0x5aa801(0x1b5)](Math[_0x5aa801(0x2d4)](), 0x3)), 0x190));
                                    continue;
                                case '3':
                                    loading[_0x5aa801(0x183)]();
                                    continue;
                                case '4':
                                    loading[_0x5aa801(0x2f9)]();
                                    continue;
                                }
                                break;
                            }
                        }
                    }
                    LogsParsed[_0x1ec9f0[_0x5aa801(0x172)]] = ![], _0x49db60[_0x5aa801(0x2b1)](_0x1ec9f0[_0x5aa801(0x2f5)], JSON[_0x5aa801(0xae)](LogsParsed), { 'encoding': _0x1ec9f0[_0x5aa801(0x1c2)] }), await _0x1ec9f0[_0x5aa801(0x178)](animate, _0x1ec9f0[_0x5aa801(0xb3)](info, _0x5aa801(0x20d))), await _0x1ec9f0[_0x5aa801(0x178)](animate, _0x1ec9f0[_0x5aa801(0xf2)](info, _0x5aa801(0x14d)));
                    const {back: _0x3e80ba} = await inquirer[_0x5aa801(0x20f)](prompts[_0x5aa801(0x1b1)]);
                    _0x1ec9f0[_0x5aa801(0x2c8)](_0x3e80ba[_0x5aa801(0x2d3)](), 'y') ? _0x1ec9f0[_0x5aa801(0xaa)](_0x1ec9f0[_0x5aa801(0x182)], _0x1ec9f0[_0x5aa801(0xe6)]) ? _0x3d0671 = _0x1ec9f0[_0x5aa801(0x2a3)] : _0x1ec9f0[_0x5aa801(0x21c)](Start) : _0x1ec9f0[_0x5aa801(0x19d)](_0x1ec9f0[_0x5aa801(0x300)], _0x1ec9f0[_0x5aa801(0x300)]) ? _0x1ec9f0[_0x5aa801(0xe3)](exit) : (_0x1ec9f0[_0x5aa801(0x2e9)](_0x503f33, _0x5aa801(0xa7) + _0x413440, { 'stdio': _0x1ec9f0[_0x5aa801(0x1d8)] }), _0xe51d61[_0x5aa801(0x2d8)]('' + _0x327f84 + _0x4cfb78 + _0x1d6cb4 + _0xb9409b[_0x5aa801(0x22e)]() + _0x37ace1 + _0x3c4abb + _0x5aa801(0x227)));
                } else
                    _0x34b92f[_0x5aa801(0x2d8)](_0x1ec9f0[_0x5aa801(0xf2)](_0x529d41, _0x1ec9f0[_0x5aa801(0x239)])), _0x3e86fb[_0x5aa801(0x2d8)](_0x1ec9f0[_0x5aa801(0x14e)](_0x19f636, '' + _0x4d425f)), _0x31d998[_0x5aa801(0x116)]();
            }
        }
    } else {
        if (_0x1ec9f0[_0x5aa801(0x23f)](_0x7fdeb8, 0x2)) {
            if (_0x1ec9f0[_0x5aa801(0xaa)](_0x1ec9f0[_0x5aa801(0x27c)], _0x1ec9f0[_0x5aa801(0x10f)]))
                return _0x1ec9f0[_0x5aa801(0x1a2)](_0x1ec9f0[_0x5aa801(0x27e)](_0x1ec9f0[_0x5aa801(0xd8)](_0x1ec9f0[_0x5aa801(0x1a2)]('\x0a', _0x54217d), _0x1ec9f0[_0x5aa801(0x2f8)]), _0x43ac88), _0x1ec9f0[_0x5aa801(0x146)]);
            else
                _0x1ec9f0[_0x5aa801(0x221)](FeedBack), _0x1ec9f0[_0x5aa801(0x221)](Start);
        } else
            _0x1ec9f0[_0x5aa801(0x23f)](_0x7fdeb8, 0x3) && (_0x1ec9f0[_0x5aa801(0x1a3)](_0x1ec9f0[_0x5aa801(0xbe)], _0x1ec9f0[_0x5aa801(0x153)]) ? _0x1ec9f0[_0x5aa801(0x219)](exit) : _0x1ec9f0[_0x5aa801(0x219)](_0x59d781));
    }
}
main(), process['on'](_0x526cfa(0x262), () => {
    const _0x25b343 = _0x526cfa, _0x1787e2 = {
            'TtFKs': function (_0x484e85, _0x342c1c) {
                return _0x484e85 + _0x342c1c;
            }
        };
    console[_0x25b343(0x2d8)](_0x1787e2[_0x25b343(0x2d0)](info, _0x25b343(0xfc))), process[_0x25b343(0x116)]();
});