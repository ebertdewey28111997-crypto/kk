/* ============================================================
   AI夸夸馆 — script.js  v2.0
   ============================================================ */

// ─── 吉祥物图片路径 ──────────────────────────────────────
const mascotImages = [
    '吉祥物/抱抱.png',
    '吉祥物/比耶.png',
    '吉祥物/叉腰.png',
    '吉祥物/臭美.png',
    '吉祥物/堆雪人.png',
    '吉祥物/奋斗.png',
    '吉祥物/奋斗2.png',
    '吉祥物/冠军奖牌.png',
    '吉祥物/哼.png',
    '吉祥物/撅嘴.png',
    '吉祥物/卡拉OK.png',
    '吉祥物/开心闪星星.png',
    '吉祥物/拉拉队.png',
    '吉祥物/马上有钱.png',
    '吉祥物/骑马.png',
    '吉祥物/送钻戒.png'
];

// ─── 故事数据 ─────────────────────────────────────────────
const stories = [
    {
        id: 1,
        text1: '暮色时分，你独自走进一座无人的古镇。石板路尽头有一间亮着灯的茶馆，推门而入，桌上摆着几样东西——',
        options1: [
            { text: '一块温热的桂花糕', tag: '渴望温暖与安全感' },
            { text: '一杯冒着热气的陈皮茶', tag: '内心疲惫、需要舒缓' },
            { text: '一封没有署名的信', tag: '好奇心强、期待未知' },
            { text: '一面落满灰尘的铜镜', tag: '正在自我审视与反思' },
            { text: '一只趴在窗台的橘猫', tag: '渴望陪伴与轻松感' },
            { text: '一本翻开一半的旧书', tag: '追求意义感与深度' }
        ],
        text2: '茶馆老板从后厨走出来，看着你选择的东西，问你想不想听一个关于它的故事。你——',
        options2: [
            { text: '立刻说好，迫不及待想知道', tag: '行动力强、外向' },
            { text: '犹豫了一下但还是点了头', tag: '谨慎但愿意尝试' },
            { text: '说不急，先把茶喝完再说', tag: '从容不迫、享受当下' },
            { text: '反问他"这故事是你编的吗？"', tag: '洞察力强、喜欢掌握主动权' },
            { text: '笑了笑没说话，等他自己讲', tag: '内敛、善于倾听' }
        ]
    },
    {
        id: 2,
        text1: '你在起雾的森林里迷了路，正焦急时，前方出现了一座木屋。推开虚掩的门，壁炉正烧得旺盛，桌上放着——',
        options1: [
            { text: '一碗热腾腾的蘑菇汤', tag: '渴望被照顾与疗愈' },
            { text: '一张标记着路线的地图', tag: '理性、寻找方向感' },
            { text: '一把精致的银色小刀', tag: '防御心强、缺乏安全感' },
            { text: '一个上锁的神秘木盒', tag: '富有探险精神' },
            { text: '一束还没枯萎的野花', tag: '浪漫主义、热爱生活' },
            { text: '一只正在打呼噜的小狗', tag: '渴望纯粹的陪伴' }
        ],
        text2: '这时，屋主——一位白发苍苍的老奶奶提着一篮浆果走了进来，微笑着递给你一颗。你会——',
        options2: [
            { text: '大方接过来立刻吃掉', tag: '性格直爽、容易信任他人' },
            { text: '接过来但悄悄放进口袋', tag: '谨慎小心、自我保护意识强' },
            { text: '询问她是不是住在这里', tag: '喜欢探究、关注他人' },
            { text: '表示感谢并想帮她提篮子', tag: '乐于助人、共情能力强' },
            { text: '有些不知所措地站在原地', tag: '社恐、慢热' }
        ]
    },
    {
        id: 3,
        text1: '深夜，你登上一列空无一人的末班电车。窗外是漫天星光，你走到一个空位坐下，发现座位旁边留着——',
        options1: [
            { text: '一个正在播放轻音乐的耳机', tag: '渴望与世界隔绝、需要独处' },
            { text: '一张写着"祝你好运"的字条', tag: '需要外界的肯定与鼓励' },
            { text: '一把没打开过的透明雨伞', tag: '未雨绸缪、心思细腻' },
            { text: '一个老式的机械怀表', tag: '怀旧、对时间感到焦虑' },
            { text: '一罐没开封的冰镇汽水', tag: '渴望释放压力与痛快' },
            { text: '一本画满涂鸦的速写本', tag: '内心丰富、富有创造力' }
        ],
        text2: '电车突然在不知名的站点停下，车门缓缓打开，外面是一片发光的海滩。广播里说这里可以停留十分钟，你会——',
        options2: [
            { text: '立刻冲下去踩水', tag: '充满活力、随性而为' },
            { text: '走到车门边看看不下去', tag: '保守、不敢轻易打破规则' },
            { text: '坐在原位静静欣赏', tag: '内心平静、享受距离美' },
            { text: '拿出手机疯狂拍照', tag: '害怕遗忘、喜欢记录生活' },
            { text: '闭上眼睛感受海风', tag: '注重感官体验、内心浪漫' }
        ]
    },
    {
        id: 4,
        text1: '你独自来到海边一座废弃的灯塔，沿着旋转楼梯爬到顶层，视野豁然开朗。在控制台上，你发现了一样东西——',
        options1: [
            { text: '一架生锈的黄铜望远镜', tag: '高瞻远瞩、对未来充满期待' },
            { text: '一个仍在发光的玻璃球', tag: '心中保有希望、不愿放弃' },
            { text: '一本日记，记录着每天的潮汐', tag: '做事有条理、心思缜密' },
            { text: '一个海螺，放在耳边能听到歌声', tag: '内心孤独、渴望被理解' },
            { text: '一张褪色的旧照片', tag: '念旧、重感情' },
            { text: '一盏随时会熄灭的煤油灯', tag: '充满危机感、神经紧绷' }
        ],
        text2: '太阳开始落山，海平面染成了橘红色。忽然，望远镜里闪烁起一阵奇怪的信号光，仿佛在召唤你。你会——',
        options2: [
            { text: '尝试用灯塔的灯光回应', tag: '勇敢、喜欢迎接挑战' },
            { text: '假装没看见，准备下楼', tag: '逃避未知、害怕惹麻烦' },
            { text: '仔细观察并记录信号规律', tag: '理性分析、冷静沉着' },
            { text: '感到兴奋，猜测这是外星人', tag: '想象力丰富、性格跳脱' },
            { text: '静静看着它，直到光芒消失', tag: '顺其自然、有宿命感' }
        ]
    },
    {
        id: 5,
        text1: '你偶然推开了城市一栋高楼天台的门，发现这里竟隐藏着一个生机盎然的秘密花园。在花丛中央，你被一样东西吸引——',
        options1: [
            { text: '一个正在滴水的复古水壶', tag: '享受付出、有滋养他人的愿望' },
            { text: '一把舒服的藤编摇椅', tag: '极度疲倦、渴望停下休息' },
            { text: '一株开得正艳却叫不出名字的花', tag: '追求独特性、不落俗套' },
            { text: '一个装满彩色石子的玻璃罐', tag: '内心保留着纯真与童心' },
            { text: '一架被藤蔓缠绕的旧秋千', tag: '怀念过去无忧无虑的时光' },
            { text: '一个悬挂在半空的风铃', tag: '敏感细腻、容易被小事物打动' }
        ],
        text2: '一阵微风吹过，花园角落里忽然传来一阵细微的哭泣声。你走近一看，是一个迷路的小精灵。你会——',
        options2: [
            { text: '温柔地问她怎么了', tag: '充满母性/父性光辉、包容' },
            { text: '四处张望帮她找回家的路', tag: '行动导向、善于解决问题' },
            { text: '在一旁默默陪着她等她哭完', tag: '理解他人的边界感、克制' },
            { text: '变个魔术或者讲笑话逗她', tag: '幽默风趣、善于活跃气氛' },
            { text: '觉得不可思议，先掐自己一下', tag: '务实、对魔幻事物保持怀疑' }
        ]
    },
    {
        id: 6,
        text1: '倾盆大雨中，你躲进了一家昏暗的旧书店。空气里弥漫着纸张发霉的味道。在最深处的书架上，你抽出了——',
        options1: [
            { text: '一本没有封面的厚重手稿', tag: '探究欲强、不拘泥于表象' },
            { text: '一本带锁的密码日记本', tag: '重视隐私、有自己的秘密' },
            { text: '一本关于宇宙起源的画册', tag: '格局宏大、思维发散' },
            { text: '一本教人如何种植玫瑰的指南', tag: '热爱生活、注重实践' },
            { text: '一本满是批注的诗集', tag: '文艺敏感、共情能力极强' },
            { text: '一本夹着干枯四叶草的童话书', tag: '相信奇迹、内心柔软' }
        ],
        text2: '正当你翻阅时，书页里掉出一张泛黄的车票，日期竟然是明天。书店老板意味深长地看着你，你会——',
        options2: [
            { text: '问老板这张票是去哪里的', tag: '好奇心重、喜欢追根究底' },
            { text: '把车票夹回去，放回书架', tag: '不想惹事、生活循规蹈矩' },
            { text: '把车票收进口袋，决定明天去看看', tag: '大胆冒险、热爱刺激' },
            { text: '把车票交给老板说是别人掉的', tag: '拾金不昧、有强烈的道德感' },
            { text: '看着车票发呆，思绪飘远', tag: '多愁善感、容易陷入回忆' }
        ]
    },
    {
        id: 7,
        text1: '凌晨两点，你走进一家还在营业的深夜食堂。老板擦着吧台问你想吃点什么，你环顾四周，目光停留在了——',
        options1: [
            { text: '角落里咕嘟冒泡的关东煮', tag: '渴望平实而持久的温暖' },
            { text: "招牌上的那道「忘忧炒饭」", tag: '心中有事、渴望解脱' },
            { text: '别人桌上一杯加了冰块的梅酒', tag: '想要微醺、放松紧绷的神经' },
            { text: '刚刚出炉、香气四溢的烤肉', tag: '欲望强烈、需要直接的满足' },
            { text: '一碗清淡热乎的清汤面', tag: '追求返璞归真、简单生活' },
            { text: '一份造型精致的抹茶甜点', tag: '注重仪式感、即使疲惫也要体面' }
        ],
        text2: '吃完后，老板递给你一个幸运饼干，说里面藏着一句预言。你掰开饼干，里面竟然是一张空白纸条。你会——',
        options2: [
            { text: '大笑说老板在开玩笑', tag: '性格豁达、不拘小节' },
            { text: '自己找笔在上面写下一句话', tag: '命运掌握在自己手中的信念感' },
            { text: '认真问老板这是什么意思', tag: '执着于答案、有些较真' },
            { text: '无所谓地把它扔进垃圾桶', tag: '不迷信、活在当下' },
            { text: '小心翼翼地收进钱包里', tag: '觉得一切都有深意、敬畏未知' }
        ]
    },
    {
        id: 8,
        text1: '你误入了一家堆满各种钟表的古董店，滴答声此起彼伏。在最显眼的位置，摆着一样特殊的计时器——',
        options1: [
            { text: '一个里面的沙子往上流的沙漏', tag: '想要逆转时光、有遗憾' },
            { text: '一块永远停在中午十二点的怀表', tag: '渴望留住最辉煌/美好的瞬间' },
            { text: '一个没有指针只有表盘的挂钟', tag: '希望摆脱束缚、向往自由' },
            { text: '一个走得飞快的电子秒表', tag: '生活节奏快、充满焦虑感' },
            { text: '一个需要每天上发条的音乐盒', tag: '喜欢规律和仪式感' },
            { text: '一个能显示你剩余寿命的计时器', tag: '直面生死、极度理性' }
        ],
        text2: '钟表匠告诉你，这件物品可以带走，但代价是用你的一段记忆来交换。你会——',
        options2: [
            { text: '毫不犹豫地答应，因为早想忘了', tag: '果断、有强烈的告别欲' },
            { text: '坚决拒绝，记忆才是最宝贵的', tag: '珍视过去、自我认同感高' },
            { text: '犹豫不决，问能不能用别人的记忆', tag: '圆滑机智、善于讨价还价' },
            { text: '问他想换哪一段，由他挑', tag: '随遇而安、听天由命' },
            { text: '转身就走，觉得这人是个疯子', tag: '现实主义者、警惕性高' }
        ]
    }
];

// ─── 字母标识（选项卡片用）────────────────────────────────
const LETTERS = ['A','B','C','D','E','F'];

// ─── 粒子系统（流星划过） ──────────────────────────────────
const PARTICLE_COUNT = 28;

function initParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    container.innerHTML = '';

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        const isMeteor = i < 20; // 前20个为流星，后8个为普通漂浮光点

        const p = document.createElement('div');
        p.className = isMeteor ? 'particle meteor' : 'particle';

        if (isMeteor) {
            // 流星参数
            const coreW   = 1.5 + Math.random() * 2;        // 核心宽 1.5-3.5px
            const tailLen = 60 + Math.random() * 120;        // 尾迹 60-180px
            const top     = Math.random() * 80;              // 起始纵向位置 0-80%
            const left    = -10 + Math.random() * 110;       // 横向位置 -10%~100%
            const dur     = 3 + Math.random() * 5;           // 3-8s 周期
            const delay   = -(Math.random() * dur);
            const angle   = 20 + Math.random() * 30;         // 划过角度 20-50°
            const opacity = 0.45 + Math.random() * 0.4;      // 0.45-0.85

            // 50%概率带鎏金色外框，50%纯红
            const useGold = Math.random() > 0.5;
            const goldGlow = useGold
                ? `0 0 4px 1px rgba(212,175,55,0.7), 0 0 8px 2px rgba(212,175,55,0.3)`
                : `0 0 4px 2px rgba(255,77,94,0.6)`;

            p.style.cssText = `
                --tail:${tailLen}px;
                --angle:${angle}deg;
                --dur:${dur}s;
                width: ${coreW}px;
                height: ${tailLen}px;
                top: ${top}%;
                left: ${left}%;
                opacity: ${opacity};
                animation-duration: ${dur}s;
                animation-delay: ${delay}s;
                box-shadow: ${goldGlow};
                ${useGold ? '--gold:1' : '--gold:0'};
            `;
        } else {
            // 普通漂浮光点
            const size    = 2 + Math.random() * 3;
            const left    = Math.random() * 100;
            const dur     = 10 + Math.random() * 10;
            const delay   = -(Math.random() * dur);
            const driftX  = (Math.random() - 0.5) * 100;
            const opacity = 0.25 + Math.random() * 0.3;

            p.style.cssText = `
                width: ${size}px; height: ${size}px;
                left: ${left}%;
                bottom: -10px;
                opacity: ${opacity};
                --drift-x: ${driftX}px;
                --dur: ${dur}s;
                animation-duration: ${dur}s;
                animation-delay: ${delay}s;
                filter: blur(1px);
                box-shadow: 0 0 ${size * 3}px rgba(255,77,94,0.55);
            `;
        }
        container.appendChild(p);
    }
}

// ─── 顶部星尘闪烁 ─────────────────────────────────────────
function initStardust() {
    const container = document.getElementById('stardust-container');
    if (!container) return;
    container.innerHTML = '';

    const COUNT = 40; // 顶部星尘数量

    for (let i = 0; i < COUNT; i++) {
        const el = document.createElement('span');

        const isGold     = Math.random() > 0.45;          // 55%红，45%金
        const isStar     = Math.random() > 0.55;          // 45%四角星形
        const size       = isStar ? (6 + Math.random() * 10) : (2 + Math.random() * 5); // px
        const left       = Math.random() * 100;            // 0-100%
        const top        = Math.random() * 100;            // 0-100% (容器本身只有35vh)
        const dur        = 1.5 + Math.random() * 3;        // 1.5-4.5s 闪烁周期
        const delay      = -(Math.random() * dur);          // 立即可见
        const maxOp      = 0.6 + Math.random() * 0.38;     // 0.6-0.98

        el.className = `stardust ${isGold ? 'gold' : 'red'}${isStar ? ' star-shape' : ''}`;

        if (isStar) {
            el.style.cssText = `
                left: ${left}%;
                top: ${top}%;
                --sd-dur: ${dur}s;
                --sd-delay: ${delay}s;
                --sd-max-op: ${maxOp};
                --sd-font: ${size}px;
            `;
        } else {
            el.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                left: ${left}%;
                top: ${top}%;
                --sd-dur: ${dur}s;
                --sd-delay: ${delay}s;
                --sd-max-op: ${maxOp};
            `;
        }
        container.appendChild(el);
    }
}

// ─── 音符随机跳动 ─────────────────────────────────────────
const NOTE_CHARS = ['♩', '♪', '♫', '♬', '𝅗𝅥', '♭', '♮', '𝄞'];

function initNotes() {
    const container = document.getElementById('notes-container');
    if (!container) return;
    container.innerHTML = '';

    const COUNT = 18; // 音符数量

    for (let i = 0; i < COUNT; i++) {
        const el = document.createElement('span');

        const isGold  = Math.random() > 0.5;
        const noteIdx = Math.floor(Math.random() * NOTE_CHARS.length);
        const size    = 14 + Math.random() * 22;            // 14-36px
        const left    = 2  + Math.random() * 96;            // 2-98%
        const bottom  = 5  + Math.random() * 75;            // 5-80% (底部到中部)
        const dur     = 4  + Math.random() * 6;             // 4-10s 跳动周期
        const delay   = -(Math.random() * dur);
        const opacity = 0.55 + Math.random() * 0.38;        // 0.55-0.93
        const rise    = -(60 + Math.random() * 120);        // 上升 60-180px
        const sway    = (Math.random() - 0.5) * 80;         // ±40px 横向摆
        const rot     = 8 + Math.random() * 20;             // 8-28° 旋转幅度

        el.className  = `music-note ${isGold ? 'gold' : 'red'}`;
        el.textContent = NOTE_CHARS[noteIdx];

        el.style.cssText = `
            font-size: ${size}px;
            left: ${left}%;
            bottom: ${bottom}%;
            --n-dur: ${dur}s;
            --n-delay: ${delay}s;
            --n-op: ${opacity};
            --n-rise: ${rise}px;
            --n-sway: ${sway}px;
            --n-rot: ${rot}deg;
        `;
        container.appendChild(el);
    }
}


/**
 * @param {HTMLElement} el      目标元素
 * @param {string}      text    要打出的文字
 * @param {number}      speed   每字间隔(ms)
 * @param {Function}    [cb]    完成回调
 * @param {boolean}     [skipOnClick] 是否支持点击跳过
 * @returns {Function} cancelFn  取消函数
 */
function typewrite(el, text, speed, cb, skipOnClick = false) {
    let i = 0;
    el.textContent = '';

    // 光标元素
    const cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    el.appendChild(cursor);

    function finish() {
        el.textContent = text;   // 直接显示全文（同时移除光标）
        if (cb) cb();
    }

    let tid = null;

    function tick() {
        if (i >= text.length) {
            if (cursor.parentNode) cursor.parentNode.removeChild(cursor);
            if (cb) cb();
            return;
        }
        el.insertBefore(document.createTextNode(text[i]), cursor);
        i++;
        tid = setTimeout(tick, speed);
    }

    if (skipOnClick) {
        const handler = () => {
            clearTimeout(tid);
            finish();
            document.removeEventListener('click', handler);
        };
        document.addEventListener('click', handler, { once: true });
    }

    tid = setTimeout(tick, speed);
    return () => { clearTimeout(tid); };
}

// ─── KuakuaApp 主类 ────────────────────────────────────────
class KuakuaApp {
    constructor() {
        this.userData = { nickname: '', tag1: '', tag2: '' };
        this.currentStory = null;
        this.resetTimer = null;
        this.minimaxApiKey = 'sk-api-_lSfvrTWwbGAncb6K8nDcbCVc_Sj8NS067VEWMHkhEm9r3ODZb_uYOcb5no20bjSxCxaBu-kHP3Onk94wFAx0pdTmmSZLVS37OqUiTnynPTFB0DMk6_CvXA';
    }

    init() {
        this._bindEvents();
        this._setRandomMascot('welcome-mascot');
        initParticles();
        initStardust();
        initNotes();
    }

    // ── 工具：随机吉祥物 ──────────────────────────
    _randomMascot() {
        return mascotImages[Math.floor(Math.random() * mascotImages.length)];
    }

    _setRandomMascot(id) {
        const el = document.getElementById(id);
        if (el) {
            const path = this._randomMascot();
            // encodeURI 保留 /，但编码中文字符，兼容 file:// 本地协议
            el.src = encodeURI(path);
        }
    }

    // ── 事件绑定 ──────────────────────────────────
    _bindEvents() {
        // 回车提交昵称
        document.getElementById('nickname-input')
            .addEventListener('keypress', e => { if (e.key === 'Enter') this.submitName(); });

        // 结果页点击/触摸重置计时器
        const rs = document.getElementById('result-screen');
        ['click','touchstart'].forEach(ev =>
            rs.addEventListener(ev, () => { if (this.resetTimer) this.startResetTimer(); })
        );
    }

    // ── 屏幕路由 ──────────────────────────────────
    goToScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');

        // 各屏进入时的副作用
        switch (screenId) {
            case 'welcome-screen':
                document.getElementById('nickname-input').value = '';
                this.userData = { nickname: '', tag1: '', tag2: '' };
                this._clearResetTimer();
                this._setRandomMascot('welcome-mascot');
                document.body.removeAttribute('data-loading');
                break;

            case 'name-screen':
                this._startNameScreen();
                break;

            case 'story-1-screen':
                this._setupStory();
                break;

            case 'loading-screen':
                document.body.setAttribute('data-loading', 'true');
                this._setupEnergyBall();
                break;

            case 'result-screen':
                document.body.removeAttribute('data-loading');
                this._setRandomMascot('result-mascot');
                break;
        }
    }

    // ── 屏幕二：昵称页 ────────────────────────────
    _startNameScreen() {
        const prompt = document.getElementById('name-prompt');
        typewrite(prompt, '先告诉我，你希望被怎么称呼？', 60, null, false);
        // 输入框延迟出现
        const input = document.getElementById('nickname-input');
        input.style.opacity = '0';
        setTimeout(() => {
            input.style.transition = 'opacity 0.5s';
            input.style.opacity = '1';
            input.focus();
        }, 1800);
    }

    submitName() {
        const input = document.getElementById('nickname-input');
        const name  = input.value.trim();
        if (name) {
            this.userData.nickname = name;
            this.goToScreen('story-1-screen');
        } else {
            input.style.borderBottomColor = 'var(--red-main)';
            input.style.transform = 'translateX(-8px)';
            setTimeout(() => {
                input.style.borderBottomColor = '';
                input.style.transform = '';
            }, 400);
        }
    }

    // ── 屏幕三：故事第一幕 ────────────────────────
    _setupStory() {
        const idx = Math.floor(Math.random() * stories.length);
        this.currentStory = stories[idx];

        this._setRandomMascot('story-1-mascot');

        const textEl = document.getElementById('story-1-text');
        const optContainer = document.getElementById('story-1-options');
        const guide = document.getElementById('story-1-guide');

        optContainer.classList.remove('visible');
        optContainer.innerHTML = '';
        guide.textContent = '';

        typewrite(textEl, this.currentStory.text1, 45, () => {
            // 故事文字打完后，显示选项
            guide.textContent = '你看着这一切——';
            this._renderOptions(
                optContainer,
                this.currentStory.options1,
                tag => this._handleOption1(tag)
            );
        }, true);
    }

    _handleOption1(tag) {
        this.userData.tag1 = tag;

        this._setRandomMascot('story-2-mascot');
        const textEl = document.getElementById('story-2-text');
        const optContainer = document.getElementById('story-2-options');
        const guide = document.getElementById('story-2-guide');

        optContainer.classList.remove('visible');
        optContainer.innerHTML = '';
        guide.textContent = '';

        // 先切换到屏幕四，再开始打字机
        this.goToScreen('story-2-screen');

        setTimeout(() => {
            typewrite(textEl, this.currentStory.text2, 45, () => {
                guide.textContent = '你拿着手机，想了想，决定——';
                this._renderOptions(
                    optContainer,
                    this.currentStory.options2,
                    tag => this._handleOption2(tag)
                );
            }, true);
        }, 100);
    }

    _handleOption2(tag) {
        this.userData.tag2 = tag;
        // 内容渐隐后进入 loading
        setTimeout(() => {
            this.goToScreen('loading-screen');
            this.generateKuakua();
        }, 600);
    }

    // ── 渲染选项卡片 ──────────────────────────────
    _renderOptions(container, options, onSelect) {
        options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn fade-in';
            btn.style.animationDelay = `${i * 0.06}s`;

            const letter = document.createElement('span');
            letter.className = 'option-letter';
            letter.textContent = LETTERS[i] || String(i + 1);

            const label = document.createElement('span');
            label.textContent = opt.text;

            btn.appendChild(letter);
            btn.appendChild(label);

            btn.onclick = () => {
                // 标记选中
                btn.classList.add('selected');
                // 其余项渐隐
                container.querySelectorAll('.option-btn').forEach(b => {
                    if (b !== btn) b.classList.add('fading');
                });
                // 禁止再次点击
                container.querySelectorAll('.option-btn').forEach(b => b.style.pointerEvents = 'none');
                setTimeout(() => onSelect(opt.tag), 500);
            };

            container.appendChild(btn);
        });

        // 选项从底部浮起
        requestAnimationFrame(() => {
            setTimeout(() => container.classList.add('visible'), 50);
        });
    }

    // ── 屏幕五：能量球动画 ────────────────────────
    _setupEnergyBall() {
        const container = document.getElementById('energy-ball-container');
        if (!container) return;

        // 清除旧光点（保留 energy-core）
        container.querySelectorAll('.energy-dot').forEach(d => d.remove());

        // 生成8个聚合光点
        const count = 8;
        for (let i = 0; i < count; i++) {
            const dot = document.createElement('div');
            dot.className = 'energy-dot';

            const angle = (i / count) * 360;
            const dist  = 55 + Math.random() * 20; // px from center
            const rad   = (angle * Math.PI) / 180;
            const dx    = Math.cos(rad) * dist;
            const dy    = Math.sin(rad) * dist;
            const dur   = 1.2 + Math.random() * 0.8;
            const delay = (i / count) * -dur;

            dot.style.cssText = `
                --dx:${dx}px; --dy:${dy}px;
                animation-duration:${dur}s;
                animation-delay:${delay}s;
            `;
            container.insertBefore(dot, document.getElementById('energy-core'));
        }
    }

    // ── 爆发过渡 ──────────────────────────────────
    _triggerBurst(cb) {
        const burst = document.getElementById('energy-burst');
        if (!burst) { cb(); return; }
        burst.style.transition = 'none';
        burst.style.opacity    = '1';
        burst.style.transform  = 'translate(-50%, -50%) scale(1)';
        burst.style.borderRadius = '50%';

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                burst.style.transition = 'transform 0.45s ease-in, border-radius 0.45s ease-in, opacity 0.15s ease 0.4s';
                burst.style.transform  = 'translate(-50%, -50%) scale(50)';
                burst.style.borderRadius = '0';
                burst.style.opacity = '0';

                setTimeout(() => {
                    burst.style.transform = 'translate(-50%, -50%) scale(1)';
                    burst.style.opacity   = '0';
                    cb();
                }, 600);
            });
        });
    }

    // ── AI 生成夸赞 ───────────────────────────────
    async generateKuakua() {
        const prompt = `你是一位极其擅长共情的心理洞察师。根据以下用户信息，生成一段专属夸赞。
用户昵称：${this.userData.nickname}
性格潜意识标签1：${this.userData.tag1}
面对困境/下一步行动倾向标签2：${this.userData.tag2}

要求：
1. 称呼用户昵称；
2. 根据标签推断用户当下的心理状态和性格特质；
3. 用具体而非空泛的语言夸赞，要让用户觉得"你怎么知道的"；
4. 语气温暖、真诚、有力量，就像一个真正懂TA的好朋友在说话；
5. 正文总字数控制在100-150字；
6. 结尾给出一句有能量的祝福或鼓励。

请严格按照以下JSON格式输出（不要输出任何其他多余文本）：
{
  "keyword": "性格关键词（4-6个字，如'温柔且有力量'）",
  "content": "夸赞正文（100-150字，可包含段落换行符\\n）"
}`;

        try {
            const response = await fetch('https://api.minimax.chat/v1/text/chatcompletion_v2', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.minimaxApiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: "abab6.5s-chat",
                    messages: [
                        { role: "system", content: "你是一个专门给人提供温暖夸赞和心理按摩的AI助手，输出必须是纯粹的JSON格式。" },
                        { role: "user", content: prompt }
                    ]
                })
            });

            if (!response.ok) throw new Error('API request failed');

            const data      = await response.json();
            const replyText = data.choices[0].message.content.trim();

            let resultData;
            try {
                const clean = replyText.replace(/```json/g, '').replace(/```/g, '').trim();
                resultData  = JSON.parse(clean);
            } catch {
                resultData = {
                    keyword: "温暖而独特",
                    content: `${this.userData.nickname}，你总是默默扛下很多事情，但请记住你的光芒无法被掩盖。愿你被这个世界温柔以待，去拥抱更广阔的天空吧！`
                };
            }

            this._triggerBurst(() => this._showResult(resultData));

        } catch (err) {
            console.error('AI error:', err);
            this._triggerBurst(() => this._showResult({
                keyword: "坚韧且温柔",
                content: `${this.userData.nickname}，也许最近的你有些疲惫，但你所展现出的那种小心翼翼的温柔，和面对未知时仍然愿意迈出一步的勇气，真的非常迷人。你比你想象的还要好。\n\n不要总是把自己逼得太紧，允许自己偶尔停下来喘口气。去感受那些微小的确幸吧，因为你值得这世间所有的美好。`
            }));
        }
    }

    // ── 结果页展示 ────────────────────────────────
    _showResult(resultData) {
        // 切换屏幕
        this.goToScreen('result-screen');

        // 标题：昵称 + 关键词（红色高亮）
        const titleEl = document.getElementById('result-title');
        titleEl.innerHTML =
            `${this.userData.nickname}，你是一个` +
            `<span class="result-keyword">「${resultData.keyword}」</span>的人`;

        // 装饰线延伸动画
        const divider = document.getElementById('result-divider');
        divider.classList.remove('expanded');
        requestAnimationFrame(() =>
            setTimeout(() => divider.classList.add('expanded'), 200)
        );

        // 正文打字机效果
        const contentEl = document.getElementById('result-content');
        contentEl.innerHTML = '';
        const paragraphs = resultData.content.split('\n').filter(p => p.trim());
        let pIdx = 0;

        const typeParagraph = () => {
            if (pIdx >= paragraphs.length) {
                this._generateQR();
                this.startResetTimer();
                return;
            }
            const p = document.createElement('p');
            contentEl.appendChild(p);
            typewrite(p, paragraphs[pIdx], 30, () => {
                pIdx++;
                setTimeout(typeParagraph, 150);
            });
        };

        // 等卡片入场动画完成后再开始打字
        setTimeout(typeParagraph, 800);
    }

    // ── 生成二维码 ────────────────────────────────
    _generateQR() {
        const qrEl = document.getElementById('qrcode');
        qrEl.innerHTML = '';
        new QRCode(qrEl, {
            text: 'https://example.com/kuakua?id=' + Math.random().toString(36).substring(7),
            width: 80, height: 80,
            colorDark:  '#1A1A22',
            colorLight: '#ffffff',
            correctLevel: QRCode.CorrectLevel.L
        });
    }

    // ── 自动重置（20秒）──────────────────────────
    startResetTimer() {
        this._clearResetTimer();
        this.resetTimer = setTimeout(() => {
            this.goToScreen('welcome-screen');
        }, 20000);
    }

    _clearResetTimer() {
        if (this.resetTimer) {
            clearTimeout(this.resetTimer);
            this.resetTimer = null;
        }
    }
}

// ─── 启动 ────────────────────────────────────────────────
const app = new KuakuaApp();
document.addEventListener('DOMContentLoaded', () => app.init());
