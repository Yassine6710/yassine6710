const _0x42f531 = _0x43b1;
(function (_0x26e93c, _0xa8f472) {
    const _0x3f908b = _0x43b1,
        _0x2896a8 = _0x26e93c();
    while (!![]) {
        try {
            const _0x2780ef = -parseInt(_0x3f908b(0xc6)) / 0x1 * (parseInt(_0x3f908b(0xa8)) / 0x2) + -parseInt(_0x3f908b(0xd9)) / 0x3 * (-parseInt(_0x3f908b(0x9a)) / 0x4) + parseInt(_0x3f908b(0x84)) / 0x5 + -parseInt(_0x3f908b(0x88)) / 0x6 * (parseInt(_0x3f908b(0xbd)) / 0x7) + -parseInt(_0x3f908b(0xdf)) / 0x8 * (parseInt(_0x3f908b(0x75)) / 0x9) + -parseInt(_0x3f908b(0xb2)) / 0xa + parseInt(_0x3f908b(0x72)) / 0xb;
            if (_0x2780ef === _0xa8f472) break;
            else _0x2896a8['push'](_0x2896a8['shift']());
        } catch (_0x1b339b) {
            _0x2896a8['push'](_0x2896a8['shift']());
        }
    }
}(_0x2f07, 0x9ea7b));
const {
    useMultiFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion,
    MessageRetryMap,
    makeCacheableSignalKeyStore,
    jidNormalizedUser,
    PHONENUMBER_MCC
} = await import(_0x42f531(0x91));
import _0x82e2af from 'moment-timezone';
import _0xe1c162 from 'node-cache';
import _0x5ac32e from 'readline';

function _0x43b1(_0x129224, _0x13ee36) {
    const _0x2f0747 = _0x2f07();
    return _0x43b1 = function (_0x43b139, _0x47122e) {
        _0x43b139 = _0x43b139 - 0x71;
        let _0x3fe62e = _0x2f0747[_0x43b139];
        return _0x3fe62e;
    }, _0x43b1(_0x129224, _0x13ee36);
}
import _0xf6dda5 from 'qrcode';
import _0x1b38a2 from 'crypto';
import _0x251366 from 'fs';
import _0x353109 from 'pino';
import * as _0x12cb2c from 'ws';
const {
    CONNECTING
} = _0x12cb2c;
import {
    Boom
} from '@hapi/boom';
import {
    makeWASocket
} from '../lib/simple.js';
if (global[_0x42f531(0x8e)] instanceof Array) console[_0x42f531(0xdc)]();
else global[_0x42f531(0x8e)] = [];
let handler = async (_0x4fc3a4, {
    conn: _0x4c1761,
    args: _0x41bb24,
    usedPrefix: _0x529715,
    command: _0x515e30,
    isOwner: _0xb4780a
}) => {
    const _0xe2fa6b = _0x42f531;
    let _0x50130e = _0x41bb24[0x0] && _0x41bb24[0x0] == 'plz' ? _0x4c1761 : await global['conn'];
    if (!(_0x41bb24[0x0] && _0x41bb24[0x0] == _0xe2fa6b(0xe2) || (await global['conn'])[_0xe2fa6b(0xde)][_0xe2fa6b(0xbc)] == _0x4c1761[_0xe2fa6b(0xde)][_0xe2fa6b(0xbc)])) throw _0xe2fa6b(0xb7) + global[_0xe2fa6b(0xc2)][_0xe2fa6b(0xde)][_0xe2fa6b(0xbc)][_0xe2fa6b(0xc1)]
    `@` [0x0] + _0xe2fa6b(0xd4) + (_0x529715 + _0x515e30);
    async function _0x498b8e() {
        const _0x132faf = _0xe2fa6b;
        let _0x4332d9 = _0x1b38a2[_0x132faf(0x83)](0xa)[_0x132faf(0x74)](_0x132faf(0xd5))[_0x132faf(0x76)](0x0, 0x8);
        !_0x251366[_0x132faf(0x78)](_0x132faf(0x8c) + _0x4332d9) && _0x251366[_0x132faf(0xe1)](_0x132faf(0x8c) + _0x4332d9, {
            'recursive': !![]
        });
        _0x41bb24[0x0] ? _0x251366[_0x132faf(0x82)](_0x132faf(0x8c) + _0x4332d9 + _0x132faf(0xe0), JSON[_0x132faf(0x95)](JSON['parse'](Buffer[_0x132faf(0xaa)](_0x41bb24[0x0], _0x132faf(0x86))[_0x132faf(0x74)](_0x132faf(0xb5))), null, '\x09')) : '';
        const {
            state: _0x57a1ec,
            saveState: _0x5bcf2f,
            saveCreds: _0xb5231a
        } = await useMultiFileAuthState(_0x132faf(0x8c) + _0x4332d9), _0xb9a42b = _0x5c0db2 => {}, _0x2d49a7 = new _0xe1c162(), {
            version: _0x29e7f0
        } = await fetchLatestBaileysVersion();
        let _0x17eebb = _0x4fc3a4[_0x132faf(0x90)][_0x132faf(0xc1)]('@')[0x0];
        const _0x292c23 = process['argv']['includes']('qr'),
            _0x2b26b1 = !!_0x17eebb || process[_0x132faf(0xcd)][_0x132faf(0xc3)](_0x132faf(0xb4)),
            _0x567540 = process[_0x132faf(0xcd)][_0x132faf(0xc3)](_0x132faf(0xd7)),
            _0x501de9 = _0x5ac32e[_0x132faf(0xb3)]({
                'input': process[_0x132faf(0xdb)],
                'output': process[_0x132faf(0xbe)]
            }),
            _0x3de52d = _0xb58372 => new Promise(_0x328cc8 => _0x501de9[_0x132faf(0xb9)](_0xb58372, _0x328cc8)),
            _0x42ef24 = {
                'logger': _0x353109({
                    'level': _0x132faf(0x73)
                }),
                'printQRInTerminal': ![],
                'mobile': _0x567540,
                'browser': [_0x132faf(0xa4), _0x132faf(0x71), _0x132faf(0xab)],
                'auth': {
                    'creds': _0x57a1ec[_0x132faf(0x9d)],
                    'keys': makeCacheableSignalKeyStore(_0x57a1ec[_0x132faf(0xae)], _0x353109({
                        'level': _0x132faf(0xa0)
                    })['child']({
                        'level': _0x132faf(0xa0)
                    }))
                },
                'markOnlineOnConnect': !![],
                'generateHighQualityLinkPreview': !![],
                'getMessage': async _0x4a5120 => {
                    const _0x160145 = _0x132faf;
                    let _0x292b86 = jidNormalizedUser(_0x4a5120[_0x160145(0x77)]),
                        _0x1acfbb = await store[_0x160145(0xda)](_0x292b86, _0x4a5120['id']);
                    return _0x1acfbb?. [_0x160145(0xb8)] || '';
                },
                'msgRetryCounterCache': _0x2d49a7,
                'msgRetryCounterMap': _0xb9a42b,
                'defaultQueryTimeoutMs': undefined,
                'version': _0x29e7f0
            };
        let _0x167214 = makeWASocket(_0x42ef24);
        if (_0x2b26b1 && !_0x167214[_0x132faf(0xd6)][_0x132faf(0x9d)]['registered']) {
            !_0x17eebb && process['exit'](0x0);
            let _0x1ae7db = _0x17eebb[_0x132faf(0xd0)](/[^0-9]/g, '');
            !Object['keys'](PHONENUMBER_MCC)['some'](_0x2c6ad7 => _0x1ae7db['startsWith'](_0x2c6ad7)) && process[_0x132faf(0xcc)](0x0), setTimeout(async () => {
                const _0xbaf917 = _0x132faf;
                let _0x19f5de = await _0x167214[_0xbaf917(0x7d)](_0x1ae7db);
                _0x19f5de = _0x19f5de?. [_0xbaf917(0x79)](/.{1,4}/g)?. [_0xbaf917(0xc0)]('-') || _0x19f5de, _0x50130e[_0xbaf917(0xcb)](_0x4fc3a4[_0xbaf917(0xa1)], _0xbaf917(0x87), _0xbaf917(0x8a), '_*مرحبا يسرنا انك سوف تسعمل البوت االخاص بنا هاذا الكود المرشح لربط البوت مع رقمك قم بكتابته وإدخال الكود في مكانه الصحيح في الإشعار الذي سوف يصلك*_ \x0a\x0a \x0a *' + _0x19f5de + '*\x0a\x0a\x0a ESSAOUIDI BOT', _0x4fc3a4), _0x501de9[_0xbaf917(0x89)]();
            }, 0xbb8);
        }
        _0x167214[_0x132faf(0xd3)] = ![];
        let _0x5c0822 = !![];
        async function _0x3acec4(_0x285705) {
            const _0x3a94c2 = _0x132faf,
                {
                    connection: _0x349385,
                    lastDisconnect: _0x3932a6,
                    isNewLogin: _0x3e8a7b,
                    qr: _0x56a631
                } = _0x285705;
            if (_0x3e8a7b) _0x167214['isInit'] = !![];
            const _0x5879f5 = _0x3932a6?. [_0x3a94c2(0xa6)]?. [_0x3a94c2(0xd1)]?. [_0x3a94c2(0xaf)] || _0x3932a6?. [_0x3a94c2(0xa6)]?. ['output']?. [_0x3a94c2(0xc9)]?. [_0x3a94c2(0xaf)];
            if (_0x5879f5 && _0x5879f5 !== DisconnectReason[_0x3a94c2(0xc4)] && _0x167214?. ['ws'][_0x3a94c2(0xa3)] == null) {
                let _0x1f7423 = global[_0x3a94c2(0x8e)][_0x3a94c2(0xad)](_0x167214);
                if (_0x1f7423 < 0x0) return console[_0x3a94c2(0xdc)](await _0x31f54a(!![])[_0x3a94c2(0x99)](console[_0x3a94c2(0xa6)]));
                delete global[_0x3a94c2(0x8e)][_0x1f7423], global['conns']['splice'](_0x1f7423, 0x1), _0x5879f5 !== DisconnectReason['connectionClosed'] ? _0x50130e[_0x3a94c2(0x7a)](_0x167214[_0x3a94c2(0xde)]['jid'], {
                    'text': _0x3a94c2(0x97)
                }, {
                    'quoted': _0x4fc3a4
                }) : _0x50130e[_0x3a94c2(0x7a)](_0x4fc3a4[_0x3a94c2(0xa1)], {
                    'text': '🚩 يتم إعادة الإتصال'
                }, {
                    'quoted': _0x4fc3a4
                });
            }
            if (global['db'][_0x3a94c2(0xce)] == null) loadDatabase();
            if (_0x349385 == _0x3a94c2(0xc7)) {
                _0x167214[_0x3a94c2(0xd3)] = !![], global['conns']['push'](_0x167214), await _0x50130e[_0x3a94c2(0x7a)](_0x4fc3a4['chat'], {
                    'text': _0x41bb24[0x0] ? _0x3a94c2(0x80) : _0x3a94c2(0x85)
                }, {
                    'quoted': _0x4fc3a4
                }), await sleep(0x1388);
                if (_0x41bb24[0x0]) return;
                await _0x50130e[_0x3a94c2(0x7a)](_0x167214['user'][_0x3a94c2(0xbc)], {
                    'text': _0x3a94c2(0x7e)
                }, {
                    'quoted': _0x4fc3a4
                }), _0x50130e[_0x3a94c2(0x7a)](_0x167214[_0x3a94c2(0xde)]['jid'], {
                    'text': _0x529715 + _0x515e30 + ' ' + Buffer['from'](_0x251366[_0x3a94c2(0x8d)](_0x3a94c2(0x8c) + _0x4332d9 + '/creds.json'), 'utf-8')[_0x3a94c2(0x74)](_0x3a94c2(0x86))
                }, {
                    'quoted': _0x4fc3a4
                });
            }
        }
        setInterval(async () => {
            const _0x4555d6 = _0x132faf;
            if (!_0x167214[_0x4555d6(0xde)]) {
                try {
                    _0x167214['ws'][_0x4555d6(0x89)]();
                } catch {}
                _0x167214['ev'][_0x4555d6(0xbb)]();
                let _0x40f4eb = global[_0x4555d6(0x8e)][_0x4555d6(0xad)](_0x167214);
                if (_0x40f4eb < 0x0) return;
                delete global['conns'][_0x40f4eb], global[_0x4555d6(0x8e)][_0x4555d6(0x9e)](_0x40f4eb, 0x1);
            }
        }, 0xea60);
        let _0x2155b0 = await import('../handler.js'),
            _0x31f54a = async function (_0x3eb102) {
                const _0x590605 = _0x132faf;
                try {
                    const _0x298d2a = await import(_0x590605(0xcf) + Date[_0x590605(0x8b)]())['catch'](console[_0x590605(0xa6)]);
                    if (Object[_0x590605(0xae)](_0x298d2a || {})['length']) _0x2155b0 = _0x298d2a;
                } catch (_0x362508) {
                    console[_0x590605(0xa6)](_0x362508);
                }
                if (_0x3eb102) {
                    try {
                        _0x167214['ws'][_0x590605(0x89)]();
                    } catch {}
                    _0x167214['ev']['removeAllListeners'](), _0x167214 = makeWASocket(_0x42ef24), _0x5c0822 = !![];
                }
                return !_0x5c0822 && (_0x167214['ev'][_0x590605(0x81)](_0x590605(0x96), _0x167214[_0x590605(0xdd)]), _0x167214['ev'][_0x590605(0x81)](_0x590605(0x94), _0x167214[_0x590605(0xa5)]), _0x167214['ev']['off'](_0x590605(0xa7), _0x167214[_0x590605(0x93)]), _0x167214['ev'][_0x590605(0x81)]('message.delete', _0x167214['onDelete']), _0x167214['ev'][_0x590605(0x81)](_0x590605(0xd2), _0x167214[_0x590605(0x98)]), _0x167214['ev'][_0x590605(0x81)](_0x590605(0xbf), _0x167214[_0x590605(0x9c)]), _0x167214['ev'][_0x590605(0x81)](_0x590605(0x7c), _0x167214[_0x590605(0x9b)])), _0x167214[_0x590605(0xb6)] = global[_0x590605(0xc2)][_0x590605(0xb6)] + '', _0x167214[_0x590605(0xa2)] = global[_0x590605(0xc2)][_0x590605(0xa2)] + '', _0x167214[_0x590605(0xc8)] = global[_0x590605(0xc2)]['spromote'] + '', _0x167214[_0x590605(0x92)] = global[_0x590605(0xc2)][_0x590605(0x92)] + '', _0x167214['handler'] = _0x2155b0[_0x590605(0xdd)][_0x590605(0xb0)](_0x167214), _0x167214[_0x590605(0xa5)] = _0x2155b0['participantsUpdate']['bind'](_0x167214), _0x167214[_0x590605(0x93)] = _0x2155b0['groupsUpdate']['bind'](_0x167214), _0x167214[_0x590605(0xb1)] = _0x2155b0[_0x590605(0x9f)]['bind'](_0x167214), _0x167214[_0x590605(0x9c)] = _0x3acec4[_0x590605(0xb0)](_0x167214), _0x167214[_0x590605(0x9b)] = _0xb5231a[_0x590605(0xb0)](_0x167214, !![]), _0x167214['ev']['on']('messages.upsert', _0x167214['handler']), _0x167214['ev']['on'](_0x590605(0x94), _0x167214[_0x590605(0xa5)]), _0x167214['ev']['on'](_0x590605(0xa7), _0x167214[_0x590605(0x93)]), _0x167214['ev']['on'](_0x590605(0xc5), _0x167214[_0x590605(0xb1)]), _0x167214['ev']['on']('connection.update', _0x167214['connectionUpdate']), _0x167214['ev']['on'](_0x590605(0x7c), _0x167214[_0x590605(0x9b)]), _0x5c0822 = ![], !![];
            };
        _0x31f54a(![]);
    }
    _0x498b8e();
};
handler[_0x42f531(0xba)] = [_0x42f531(0x7f)], handler[_0x42f531(0xca)] = [_0x42f531(0xa9)], handler[_0x42f531(0x7b)] = [_0x42f531(0xb4), _0x42f531(0x8f), _0x42f531(0xac), _0x42f531(0xa9)], handler[_0x42f531(0xd8)] = ![];
export default handler;

function sleep(_0x1d6651) {
    return new Promise(_0x25b5d2 => setTimeout(_0x25b5d2, _0x1d6651));
}

function _0x2f07() {
    const _0x52891a = ['join', 'split', 'conn', 'includes', 'loggedOut', 'message.delete', '73835yKdnBE', 'open', 'spromote', 'payload', 'tags', 'sendFile', 'exit', 'argv', 'data', '../handler.js?update=', 'replace', 'output', 'call', 'isInit', '?text=', 'hex', 'authState', 'mobile', 'rowner', '759BVJPCD', 'loadMessage', 'stdin', 'log', 'handler', 'user', '43336SgAiEo', '/creds.json', 'mkdirSync', 'plz', 'Chrome', '11791098SKTchT', 'silent', 'toString', '324vGXiOZ', 'slice', 'remoteJid', 'existsSync', 'match', 'sendMessage', 'command', 'creds.update', 'requestPairingCode', 'يتم تحميل البوت على هاذا الجهاز... ', 'botclone', '🟢 ثم الإتصال بالسيرفر \x0a \x0a مرحبا بك في بوت ESSAOUIDI البوت مدعوم بالكثير من الخصائص كا صناعة الصور وارسال التطبيقات والفيديوهات وكل مايخص المستخدم \x0a\x0a تابعني على انستجرام\x0a www.instagram.com/essaouidi_yassine', 'off', 'writeFileSync', 'randomBytes', '5444745mGjOOw', '🟢 جاري الإتصال بالبوت الرئيسي', 'base64', 'https://telegra.ph/file/f6f26c3ddf1c1c03a52a4.png', '493500PbZFLm', 'close', 'qrcode.png', 'now', './jadibts/', 'readFileSync', 'conns', 'codigo', 'sender', '@whiskeysockets/baileys', 'sdemote', 'groupsUpdate', 'group-participants.update', 'stringify', 'messages.upsert', '🚩 \"اتصال مفقود، يتم إعادة الاتصال\"', 'onCall', 'catch', '15856PoWThQ', 'credsUpdate', 'connectionUpdate', 'creds', 'splice', 'deleteUpdate', 'fatal', 'chat', 'bye', 'socket', 'Ubuntu', 'participantsUpdate', 'error', 'groups.update', '24qUAQdK', 'jadibot', 'from', '20.0.04', 'sercode', 'indexOf', 'keys', 'statusCode', 'bind', 'onDelete', '5281260qGGQHZ', 'createInterface', 'code', 'utf-8', 'welcome', '\"هذا الأمر يمكن استخدامه فقط من قبل الروبوت الرئيسي.\" wa.me/', 'message', 'question', 'help', 'removeAllListeners', 'jid', '77NqvzBK', 'stdout', 'connection.update'];
    _0x2f07 = function () {
        return _0x52891a;
    };
    return _0x2f07();
  }
