/* ============================================================
   AI夸夸馆 — script.js  v2.0
   故事数据见 stories-data.js
   ============================================================ */

// ─── 吉祥物图片路径 ──────────────────────────────────────
const mascotImages = [
    '吉祥物/比耶.png',
    '吉祥物/叉腰.png',
    '吉祥物/臭美.png',
    '吉祥物/奋斗.png',
    '吉祥物/奋斗2.png',
    '吉祥物/卡拉OK.png',
    '吉祥物/开心闪星星.png',
    '吉祥物/拉拉队.png',
    '吉祥物/马上有钱.png',
    '吉祥物/骑马.png'
];

// ─── 字母标识（选项卡片用）────────────────────────────────
const LETTERS = ['A','B','C','D','E'];

// ─── 粒子系统（流星划过） ──────────────────────────────────
const PARTICLE_COUNT = 28;

function initParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;
    container.innerHTML = '';

    for (let i = 0; i < PARTICLE_COUNT; i++) {
        const isMeteor = i < 20;

        const p = document.createElement('div');
        p.className = isMeteor ? 'particle meteor' : 'particle';

        if (isMeteor) {
            const coreW   = 1.5 + Math.random() * 2;
            const tailLen = 60 + Math.random() * 120;
            const top     = Math.random() * 80;
            const left    = -10 + Math.random() * 110;
            const dur     = 3 + Math.random() * 5;
            const delay   = -(Math.random() * dur);
            const angle   = 20 + Math.random() * 30;
            const opacity = 0.45 + Math.random() * 0.4;

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

    const COUNT = 40;

    for (let i = 0; i < COUNT; i++) {
        const el = document.createElement('span');

        const isGold     = Math.random() > 0.45;
        const isStar     = Math.random() > 0.55;
        const size       = isStar ? (6 + Math.random() * 10) : (2 + Math.random() * 5);
        const left       = Math.random() * 100;
        const top        = Math.random() * 100;
        const dur        = 1.5 + Math.random() * 3;
        const delay      = -(Math.random() * dur);
        const maxOp      = 0.6 + Math.random() * 0.38;

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

    const COUNT = 18;

    for (let i = 0; i < COUNT; i++) {
        const el = document.createElement('span');

        const isGold  = Math.random() > 0.5;
        const noteIdx = Math.floor(Math.random() * NOTE_CHARS.length);
        const size    = 14 + Math.random() * 22;
        const left    = 2  + Math.random() * 96;
        const bottom  = 5  + Math.random() * 75;
        const dur     = 4  + Math.random() * 6;
        const delay   = -(Math.random() * dur);
        const opacity = 0.55 + Math.random() * 0.38;
        const rise    = -(60 + Math.random() * 120);
        const sway    = (Math.random() - 0.5) * 80;
        const rot     = 8 + Math.random() * 20;

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
    let cbCalled = false;
    el.textContent = '';

    const cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    el.appendChild(cursor);

    let skipHandler = null;

    function removeSkip() {
        if (skipHandler) {
            document.removeEventListener('click', skipHandler);
            skipHandler = null;
        }
    }

    function done() {
        if (cbCalled) return;
        cbCalled = true;
        removeSkip();
        if (cb) cb();
    }

    function finish() {
        clearTimeout(tid);
        if (cursor.parentNode) cursor.parentNode.removeChild(cursor);
        el.textContent = text;
        done();
    }

    let tid = null;

    function tick() {
        if (i >= text.length) {
            if (cursor.parentNode) cursor.parentNode.removeChild(cursor);
            done();
            return;
        }
        el.insertBefore(document.createTextNode(text[i]), cursor);
        i++;
        tid = setTimeout(tick, speed);
    }

    if (skipOnClick) {
        const registerSkip = () => {
            skipHandler = (e) => {
                if (e.target.closest && e.target.closest('.option-btn')) return;
                finish();
            };
            document.addEventListener('click', skipHandler);
        };
        setTimeout(registerSkip, 80);
    }

    tid = setTimeout(tick, speed);
    return () => { clearTimeout(tid); removeSkip(); };
}

// ─── KuakuaApp 主类 ────────────────────────────────────────
class KuakuaApp {
    constructor() {
        this.userData = { nickname: '', tags: [] };
        this.currentStory = null;
        this._currentStep = 0;
        this._cancelTypewriter = null;
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
            el.src = encodeURI(path);
        }
    }

    // ── 事件绑定 ──────────────────────────────────
    _bindEvents() {
        document.getElementById('nickname-input')
            .addEventListener('keypress', e => { if (e.key === 'Enter') this.submitName(); });

        const rs = document.getElementById('result-screen');
        ['click','touchstart'].forEach(ev =>
            rs.addEventListener(ev, (e) => {
                if (e.target.closest('.reset-btn')) return;
                if (this.resetTimer) this.startResetTimer();
            })
        );
    }

    // ── 屏幕路由 ──────────────────────────────────
    goToScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');

        switch (screenId) {
            case 'welcome-screen':
                document.getElementById('nickname-input').value = '';
                this.userData = { nickname: '', tags: [] };
                this._currentStep = 0;
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

    // ── 屏幕三：故事聊天流 ────────────────────────
    _setupStory() {
        const idx = Math.floor(Math.random() * stories.length);
        this.currentStory = stories[idx];
        this._currentStep = 0;
        this.userData.tags = [];

        const chatWrapper = document.querySelector('#story-1-screen .chat-wrapper');
        chatWrapper.innerHTML = '';

        // 吉祥物头像
        const avatarImg = document.createElement('img');
        avatarImg.id = 'story-1-mascot';
        avatarImg.className = 'chat-avatar';
        avatarImg.alt = '吉祥物';
        avatarImg.src = encodeURI(this._randomMascot());

        const introBubble = document.createElement('div');
        introBubble.className = 'chat-bubble story-bubble';
        const introText = document.createElement('p');
        introText.className = 'story-text';
        introBubble.appendChild(introText);

        const chatRow = document.createElement('div');
        chatRow.className = 'chat-row';
        chatRow.appendChild(avatarImg);
        chatRow.appendChild(introBubble);
        chatWrapper.appendChild(chatRow);

        // 将 intro 与第0步场景文合并，一起展示完再出选项
        let introContent = this.currentStory.intro;
        let step0Text    = this.currentStory.steps[0].text;
        if (this.currentStory.id === 1) {
            introContent = introContent.replace(/\{name\}/g, this.userData.nickname);
            step0Text    = step0Text.replace(/\{name\}/g, this.userData.nickname);
        }
        const fullOpeningText = introContent + '\n\n' + step0Text;

        if (this._cancelTypewriter) this._cancelTypewriter();
        this._cancelTypewriter = typewrite(introText, fullOpeningText, 40, () => {
            this._cancelTypewriter = null;
            // 打字完成后直接渲染第0步选项（无需再追加场景气泡）
            this._renderStepOptions(chatWrapper, 0, this.currentStory.steps[0].options);
        }, true);
    }

    // ── 追加过渡气泡 ──────────────────────────────
    _appendTransition(text) {
        const chatWrapper = document.querySelector('#story-1-screen .chat-wrapper');

        // 找当前吉祥物头像
        const avatarSrc = document.getElementById('story-1-mascot')
            ? document.getElementById('story-1-mascot').src
            : encodeURI(this._randomMascot());

        const newAvatar = document.createElement('img');
        newAvatar.className = 'chat-avatar';
        newAvatar.alt = '吉祥物';
        newAvatar.src = encodeURI(this._randomMascot());
        // 更新全局吉祥物引用ID（用最新的这个）
        newAvatar.id = 'story-1-mascot';
        // 移除旧的 id 避免重复
        const oldMascot = chatWrapper.querySelector('#story-1-mascot');
        if (oldMascot && oldMascot !== newAvatar) oldMascot.removeAttribute('id');

        const bubble = document.createElement('div');
        bubble.className = 'chat-bubble story-bubble transition-bubble';
        const textEl = document.createElement('p');
        textEl.className = 'story-text';
        bubble.appendChild(textEl);

        const row = document.createElement('div');
        row.className = 'chat-row';
        row.appendChild(newAvatar);
        row.appendChild(bubble);
        chatWrapper.appendChild(row);

        // 滚到底部
        chatWrapper.scrollTo({ top: chatWrapper.scrollHeight, behavior: 'smooth' });

        // 打字机显示过渡文本
        return new Promise(resolve => {
            if (this._cancelTypewriter) this._cancelTypewriter();
            this._cancelTypewriter = typewrite(textEl, text, 40, () => {
                this._cancelTypewriter = null;
                resolve();
            }, true);
        });
    }

    // ── 追加步骤选项（step >= 1 时由 _handleStepChoice 调用） ──
    _appendStepOptions(step) {
        const chatWrapper = document.querySelector('#story-1-screen .chat-wrapper');
        const stepData = this.currentStory.steps[step];
        this._renderStepOptions(chatWrapper, step, stepData.options);
    }

    // ── 追加场景文气泡（带打字机） ────────────────
    _appendSceneBubble(rawText, onDone) {
        // 处理 {name} 占位符（仅故事一）
        const text = (this.currentStory && this.currentStory.id === 1)
            ? rawText.replace(/\{name\}/g, this.userData.nickname)
            : rawText;
        const chatWrapper = document.querySelector('#story-1-screen .chat-wrapper');

        // 每次新步骤：清空旧内容，只展示当前场景
        chatWrapper.innerHTML = '';

        const bubble = document.createElement('div');
        bubble.className = 'chat-bubble story-bubble transition-bubble';
        const textEl = document.createElement('p');
        textEl.className = 'story-text';
        bubble.appendChild(textEl);

        const row = document.createElement('div');
        row.className = 'chat-row scene-row';

        const newAvatar = document.createElement('img');
        newAvatar.className = 'chat-avatar';
        newAvatar.alt = '吉祥物';
        newAvatar.src = encodeURI(this._randomMascot());
        newAvatar.id = 'story-1-mascot';

        row.appendChild(newAvatar);
        row.appendChild(bubble);
        chatWrapper.appendChild(row);
        chatWrapper.scrollTo({ top: 0, behavior: 'instant' });

        if (this._cancelTypewriter) this._cancelTypewriter();
        this._cancelTypewriter = typewrite(textEl, text, 40, () => {
            this._cancelTypewriter = null;
            chatWrapper.scrollTo({ top: chatWrapper.scrollHeight, behavior: 'smooth' });
            if (onDone) onDone();
        }, true);
    }

    // ── 渲染步骤选项（含引导语+进度条） ──────────
    _renderStepOptions(chatWrapper, step, options) {
        // 步骤指示器（第N次抉择）
        const indicator = document.createElement('div');
        indicator.className = 'step-indicator';
        indicator.textContent = `第 ${step + 1} / 5 次抉择`;
        chatWrapper.appendChild(indicator);

        // 引导语 + 进度条
        const guideWrap = document.createElement('div');
        guideWrap.className = 'options-guide-wrap';

        const guide = document.createElement('p');
        guide.className = 'options-guide';
        guide.textContent = '请凭借直觉快速回答';

        const progressWrap = document.createElement('div');
        progressWrap.className = 'choice-progress-wrap';
        const progressBar = document.createElement('div');
        progressBar.className = 'choice-progress-bar';
        progressWrap.appendChild(progressBar);

        guideWrap.appendChild(guide);
        guideWrap.appendChild(progressWrap);
        chatWrapper.appendChild(guideWrap);

        // 选项容器
        const optContainer = document.createElement('div');
        optContainer.className = 'options-container';
        chatWrapper.appendChild(optContainer);

        // 渲染选项按钮
        this._renderOptions(optContainer, options, (tag) => {
            this._stopChoiceTimer(progressBar);
            // 移除本轮选项和引导语，保持界面干净
            setTimeout(() => {
                guideWrap.remove();
                indicator.remove();
                optContainer.remove();
            }, 500);
            this._handleStepChoice(tag);
        });

        // 显示引导语
        requestAnimationFrame(() => {
            setTimeout(() => guideWrap.classList.add('visible'), 50);
        });

        // 启动倒计时
        this._startChoiceTimer(progressBar, 40000, () => {
            if (!optContainer.dataset.selected) {
                const btns = optContainer.querySelectorAll('.option-btn');
                if (btns.length) btns[Math.floor(Math.random() * btns.length)].click();
            }
        });

        // 选项出现后滚到顶部，确保从步骤指示器开始完整显示
        setTimeout(() => {
            chatWrapper.scrollTo({ top: 0, behavior: 'smooth' });
        }, 420);
    }

    // ── 统一步骤处理器 ────────────────────────────
    _handleStepChoice(tag) {
        this.userData.tags.push(tag);
        this._currentStep++;

        if (this._currentStep < 5) {
            // 还有下一步：追加过渡气泡 + 下一步选项
            const nextStepData = this.currentStory.steps[this._currentStep];

            // 先追加过渡气泡（下一步的场景文），再渲染选项
            this._appendSceneBubble(nextStepData.text, () => {
                const chatWrapper = document.querySelector('#story-1-screen .chat-wrapper');
                this._renderStepOptions(chatWrapper, this._currentStep, nextStepData.options);
            });
        } else {
            // 5步全部完成，进入 loading
            setTimeout(() => {
                this.goToScreen('loading-screen');
                this.generateKuakua();
            }, 800);
        }
    }

    // ── 15s 选择倒计时 ────────────────────────────
    _startChoiceTimer(barEl, totalMs, onTimeout) {
        if (barEl) {
            barEl.classList.remove('running');
            barEl.style.animationDuration = '';
            void barEl.offsetWidth;
            barEl.style.animationDuration = `${totalMs}ms`;
            barEl.classList.add('running');
        }
        this._choiceTimer = setTimeout(onTimeout, totalMs);
    }

    _stopChoiceTimer(barEl) {
        if (this._choiceTimer) {
            clearTimeout(this._choiceTimer);
            this._choiceTimer = null;
        }
        if (barEl) {
            barEl.classList.remove('running');
        }
    }

    // ── 渲染选项卡片 ──────────────────────────────
    _renderOptions(container, options, onSelect) {
        delete container.dataset.selected;
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

            btn.onclick = (e) => {
                e.stopPropagation();
                if (container.dataset.selected) return;
                container.dataset.selected = '1';
                btn.classList.add('selected');
                container.querySelectorAll('.option-btn').forEach(b => {
                    if (b !== btn) b.classList.add('fading');
                });
                container.querySelectorAll('.option-btn').forEach(b => b.style.pointerEvents = 'none');
                setTimeout(() => onSelect(opt.tag), 500);
            };

            container.appendChild(btn);
        });

        requestAnimationFrame(() => {
            setTimeout(() => container.classList.add('visible'), 50);
        });
    }

    // ── 屏幕五：能量球动画 ────────────────────────
    _setupEnergyBall() {
        const container = document.getElementById('energy-ball-container');
        if (!container) return;

        container.querySelectorAll('.energy-dot').forEach(d => d.remove());

        const count = 8;
        for (let i = 0; i < count; i++) {
            const dot = document.createElement('div');
            dot.className = 'energy-dot';

            const angle = (i / count) * 360;
            const dist  = 55 + Math.random() * 20;
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
        const tagsText = this.userData.tags
            .map((t, i) => `行为标签${i + 1}：${t}`)
            .join('\n');

        // 【终极防漏版 Prompt】：将金句独立为一个 JSON 字段，强制 AI 必须生成
        const prompt = `你是一位极其擅长共情的心理洞察师，你的语言有着直击人心的催泪力量。请根据以下用户信息，生成一段深度共鸣的专属分析与夸赞。

用户昵称：${this.userData.nickname}
用户在5个情景中做出的选择对应的性格标签：
${tagsText}

创作要求：
1. 【核心洞察】：请务必从这5个标签中提取出TA性格中最大的矛盾点或反差萌（例如：总是习惯性地照顾所有人，却常常忘了心疼自己）。用这层反差来破防，让TA产生"天哪，你怎么知道我这么累"的落泪感。
2. 【文案基调】：催泪、极度真诚、极具共鸣感。要像一个真正懂TA灵魂的老友，在一个疲惫的深夜给TA一个深深的拥抱。
3. 【专属金句】：必须从世界文学名著或经典哲学著作中选取一句真实存在的原著名句（如托尔斯泰、海明威、雨果、陀思妥耶夫斯基、卡夫卡、马尔克斯、加缪、茨威格、莎士比亚等）。严禁使用网络改编句、来源不可考的伪名言或自行创作的句子。金句须与TA的性格反差高度契合，能让人读完产生"这句话就是为我写的"的共鸣感。

【极其重要】请严格按照以下JSON格式输出，不得输出任何JSON以外的文字、注释或代码块标记：
{
  "keyword": "性格反差关键词（4-6个字，如坚硬壳柔软心）",
  "quote": "【送给${this.userData.nickname}的一句话】\\n名句内容 ——《书名》作者名",
  "content": "夸赞正文（字数硬性要求250-320字，必须严格分为3个自然段，每段不少于70字，段落之间严格使用\\n\\n换行，正文中不要出现金句）"
}

注意事项：
- 必须输出 keyword、quote、content 三个字段，缺一不可，其中 quote 字段尤其重要不得省略
- 所有字段值内部禁止使用英文双引号，如需引用请用书名号《》或直接省略引号
- content字段的换行必须用\\n\\n，不得用实际换行符
- 输出必须是可以直接被JSON.parse()解析的合法JSON字符串`;

        try {
            const response = await fetch('https://api.minimax.chat/v1/text/chatcompletion_v2', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.minimaxApiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: "abab6.5s-chat",
                    temperature: 0.9,       // 提高随机性，避免每次输出相同金句
                    top_p: 0.95,            // 扩大采样范围，增加金句多样性
                    messages: [
                        { role: "system", content: "你是一个专门给人提供温暖夸赞和心理按摩的AI助手，输出必须是纯粹的JSON格式。" },
                        { role: "user", content: prompt }
                    ]
                })
            });

            if (!response.ok) throw new Error('API request failed');

            const data      = await response.json();
            const replyText = data.choices[0].message.content.trim();

            // 【调试】打印 API 原始返回，便于排查解析失败原因
            console.log('=== MiniMax 原始返回 ===');
            console.log(replyText);
            console.log('========================');

            let resultData;
            try {
                // Step1：去除所有 markdown 代码块标记
                let clean = replyText
                    .replace(/^```json\s*/i, '')
                    .replace(/^```\s*/i, '')
                    .replace(/\s*```$/i, '')
                    .trim();

                // Step2：提取第一个完整 JSON 对象
                const jsonMatch = clean.match(/\{[\s\S]*\}/);
                if (jsonMatch) clean = jsonMatch[0];

                console.log('=== MiniMax清洗后原文 ===');
                console.log(clean);

                // Step3：容错提取器——逐字段独立提取，quote 缺失时补备用金句
                const fallbackQuotes = [
                    `【送给${this.userData.nickname}的一句话】\n我们最终都要独自承担每件事——但不是现在，现在我们还在一起。 ——《永别了，武器》海明威`,
                    `【送给${this.userData.nickname}的一句话】\n勇气不是没有恐惧，而是判断出还有比恐惧更重要的东西。 ——《杀死一只知更鸟》哈珀·李`,
                    `【送给${this.userData.nickname}的一句话】\n人所能犯的最大错误，就是走在幸福旁边而没有注意到它。 ——《悲惨世界》雨果`,
                    `【送给${this.userData.nickname}的一句话】\n在人类的一切道德品质中，善良的心地是最需要的。 ——《战争与和平》列夫·托尔斯泰`,
                    `【送给${this.userData.nickname}的一句话】\n献出你的心，哪怕它会被打碎，因为只有破碎过的心，才真正活过。 ——《呼啸山庄》艾米莉·勃朗特`,
                    `【送给${this.userData.nickname}的一句话】\n最深的孤独不是一个人待着，而是在所有人中间却感到格格不入。 ——《变形记》卡夫卡`,
                    `【送给${this.userData.nickname}的一句话】\n人只有在内心真正平静的时候，才能听见自己真实的声音。 ——《瓦尔登湖》梭罗`,
                    `【送给${this.userData.nickname}的一句话】\n即使在最深的黑暗里，也总有一点光在等待被发现。 ——《百年孤独》马尔克斯`
                ];
                const randomFallbackQuote = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];

                function repairJSON(str) {
                    // 提取 keyword（结构简单，直接正则）
                    const keywordMatch = str.match(/"keyword"\s*:\s*"((?:[^"\\]|\\.)*)"/);

                    // 提取 quote（quote 在 content 前，结构也相对简单）
                    const quoteMatch = str.match(/"quote"\s*:\s*"((?:[^"\\]|\\.)*)"/);

                    // 提取 content：用位置切割法，不依赖引号边界
                    const contentIdx = str.indexOf('"content"');
                    let contentVal = '';
                    if (contentIdx !== -1) {
                        // 找到 "content": " 后的第一个 " 作为值开始
                        const valStart = str.indexOf('"', contentIdx + '"content"'.length + 1) + 1;
                        // 值结束：找最后一个 } 前的最后一个 "
                        const objEnd = str.lastIndexOf('}');
                        let valEnd = objEnd - 1;
                        while (valEnd > valStart && str[valEnd] !== '"') valEnd--;
                        contentVal = str.slice(valStart, valEnd);
                    }

                    // keyword 和 content 有任意一个缺失则无法修复
                    if (!keywordMatch || !contentVal) return null;

                    return {
                        keyword: keywordMatch[1],
                        content: contentVal
                            .replace(/\\n\\n/g, '\n\n')
                            .replace(/\\n/g, '\n'),
                        // quote 缺失时使用备用金句
                        quote: quoteMatch
                            ? quoteMatch[1].replace(/\\n/g, '\n')
                            : randomFallbackQuote
                    };
                }

                // 先尝试标准解析
                let parsed = null;
                try {
                    parsed = JSON.parse(clean);
                } catch (e1) {
                    console.warn('标准解析失败，尝试容错修复...', e1.message);
                    // 用自定义提取器修复
                    parsed = repairJSON(clean);
                    if (parsed) {
                        console.log('=== 容错修复成功 ===');
                    } else {
                        console.error('容错修复也失败');
                        throw e1;
                    }
                }
                resultData = parsed;

                // Step4：确保核心字段存在，quote 缺失时补备用金句
                if (!resultData.keyword || !resultData.content) {
                    console.warn('核心字段缺失:', { keyword: !!resultData.keyword, content: !!resultData.content });
                    throw new Error('Required fields missing');
                }
                if (!resultData.quote) {
                    console.warn('quote 字段缺失，使用备用金句');
                    resultData.quote = randomFallbackQuote;
                }

                console.log('=== 解析成功 ===', resultData.keyword);
            } catch (parseErr) {
                console.error('=== JSON解析/字段校验失败，触发兜底 ===', parseErr);
                const contingencyOptions = [
                    {
                        keyword: "铠甲里的赤子",
                        content: `${this.userData.nickname}，从你的选择里，我读到了一种让人又心疼又敬佩的反差——你是那种在别人需要时第一个顶上去的人，却在所有人散场之后，一个人坐在角落里消化所有的疲惫。你把最坚硬的那一面给了世界，把最柔软的那一面，悄悄藏了起来。\n\n你太会照顾别人了，懂事到让大家忘记：你也只是一个普通人，也会累，也会有想被人抱一抱的深夜。你明明也渴望有人问一句"你还好吗"，却总是抢在别人开口之前说"我没事"。这种反差，是你身上最让人心疼的地方，也是你最珍贵的地方。\n\n今天，我想替那些被你照顾过却忘了回头看你的人说一句：谢谢你一直都在。你不需要证明自己足够强，因为你愿意留下来本身，就已经是最了不起的事了。`,
                        quote: `【送给${this.userData.nickname}的一句话】\n"我们最终都要独自面对上帝，独自承担每件事——但不是现在，现在我们还在一起。" ——《永别了，武器》海明威`
                    },
                    {
                        keyword: "清醒又烂漫的行路人",
                        content: `${this.userData.nickname}，你身上有一种极少见的矛盾：你有着看透世界规则的清醒，却依然选择用最笨拙、最真诚的方式去对待每一个人。别人早就学会了"适当保留"，而你，还是会在一个陌生人面前毫无防备地掏出全部的善意。\n\n这不是你不够聪明，恰恰相反——这说明你经历了那么多，内心深处那个相信人与人之间可以真诚相待的部分，从未被磨灭过。但我知道，这份天真也让你受过伤。那些你全力付出却没有得到回应的时刻，你是真的难受过的。\n\n可你还是没有变。每次遇到需要帮助的人，你还是第一个出现。这种明知道会累、却依然选择留下来的人，才是这个世界上真正的英雄。你的善良不是软弱，是一种勇气。`,
                        quote: `【送给${this.userData.nickname}的一句话】\n"勇气不是没有恐惧，而是判断出还有比恐惧更重要的东西。" ——《杀死一只知更鸟》哈珀·李`
                    },
                    {
                        keyword: "深海里的珊瑚礁",
                        content: `${this.userData.nickname}，你在人群里看起来总是那么稳，甚至有些冷静到让人以为你不太在乎什么。但我从你的选择里看到了另一个你——你其实是所有人里感受最深的那个，只是你把那些汹涌的情绪，全部压在了平静的水面以下。\n\n你很少主动解释自己，也很少开口说"我很在意这件事"。你宁愿用行动去证明，宁愿默默地把所有事情做好，也不愿意让别人看到你用力的样子。这种深藏不露的温柔，其实是一种很深的孤独——因为很少有人能看见水面下那个你。\n\n我希望你知道：你不需要永远保持那副云淡风轻的样子。那个偶尔会累、偶尔也想被人看见的你，同样值得被好好爱着。希望有一天，你遇到的那个人，能有潜入深海的耐心。`,
                        quote: `【送给${this.userData.nickname}的一句话】\n"人的一切痛苦，本质上都是对自己无能的愤怒。但你选择了将它化为对他人的温柔，这是一种伟大。" ——《罪与罚》陀思妥耶夫斯基`
                    },
                    {
                        keyword: "用笑扛着世界的人",
                        content: `${this.userData.nickname}，你有一种旁人羡慕却难以复制的本事：不管现场有多乱、气氛有多沉，你总能找到那句让所有人都松一口气的话。你像一颗随时待命的信号弹，在别人快撑不住的时候，第一个炸出光来。\n\n但我知道，那些让别人笑出来的话，有时候是你用来盖住自己情绪的。你不是真的什么都无所谓，你只是太擅长让别人觉得"没事了"。那个总是第一个调节氛围的你，私下里也有很多话堵在喉咙口，只是一直找不到合适的时机说出来。\n\n今天我想对你说一句：你可以不搞笑。你可以认真说"我最近有点难"，这句话不会让你失去任何人。那些真正在乎你的人，等的就是你愿意卸下那个开心果的样子的那一刻。你值得被认真对待，不只是被逗乐。`,
                        quote: `【送给${this.userData.nickname}的一句话】\n"我们为什么要沉溺于过去，难道就因为不能忘怀？" ——《了不起的盖茨比》菲茨杰拉德`
                    },
                    {
                        keyword: "沉默的稳定器",
                        content: `${this.userData.nickname}，你身上有一种极其珍贵却让人心疼的反差：你是那种能让一群慌乱的人瞬间安静下来的存在，不是靠声音大，而是靠你站在那里本身。但正因为你太稳，大家往往忘记了来问你一句——你自己还好吗？\n\n你不擅长说"我很累"，更不习惯让别人看到你用力的样子。你宁可把所有的重量一个人扛着，也不愿意在别人面前显得需要帮助。这种骨子里的自持，让你成了很多人的后盾，却也让你变成了那个永远站在最后一个被照顾的人。\n\n我想让你知道：你的稳定不是你欠这个世界的，那是你每一天都在悄悄付出的礼物。而礼物，是可以有代价的。你完全可以在累了的时候，允许自己靠一靠，让别人也来稳住你一次。`,
                        quote: `【送给${this.userData.nickname}的一句话】\n"在人类的一切道德品质中，善良的心地是最需要的。" ——《战争与和平》列夫·托尔斯泰`
                    },
                    {
                        keyword: "共情过载的赤子",
                        content: `${this.userData.nickname}，你有一种大多数人一辈子都学不会的能力——你能在别人还没开口之前，就已经感受到他们心里在难受什么。一个眼神、一句话里的微小停顿，你都听得到别人没说出口的部分。这是天赋，也是你最深的温柔。\n\n但这份天赋的代价是：你替太多人难过，太多人担心，有时候连你自己都分不清，哪些情绪是你的，哪些是你替别人背来的。你的心，长期处于满载的状态，却很少有人意识到要来帮你卸一卸。\n\n今天，我想把这份感受还给你：你感受到的那些，不是你的负担，是你独一无二的方式。但你也可以把这份能力，偶尔用在自己身上——好好感受一下，此刻的你，最需要的是什么？`,
                        quote: `【送给${this.userData.nickname}的一句话】\n"最深的孤独不是一个人待着，而是在所有人中间却感到格格不入。" ——《变形记》卡夫卡`
                    },
                    {
                        keyword: "深藏不露的燃点",
                        content: `${this.userData.nickname}，从你的选择里，我看见了一种很少见的人：你不靠掌声活着，也不需要被看见才能做好一件事。你有自己的节奏，自己的判断，外面的喧嚣和压力很难真正打乱你——但这并不意味着你不在乎，恰恰相反，你在乎的东西，只是藏得比别人深。\n\n旁人常常以为你好拿捏，以为你随时都可以被忽略，但在真正需要你的那一刻，你总是比所有人都燃得更久、更稳。这种人，往往在最关键的时刻才被发现有多重要，但那时候已经晚了——因为很少有人在平时去珍惜你。\n\n我希望你知道：你的低调不是你的缺点，是你最值钱的东西。在这个人人都在晒光的时代，你选择把光留给真正需要被照亮的地方，这件事本身，已经非常了不起了。`,
                        quote: `【送给${this.userData.nickname}的一句话】\n"人只有在内心真正平静的时候，才能听见自己真实的声音。" ——《瓦尔登湖》梭罗`
                    },
                    {
                        keyword: "温柔而孤独的摆渡人",
                        content: `${this.userData.nickname}，你身上有一种让人动容的矛盾：你总是帮别人渡过难关，陪别人走过那些最黑暗的一段路，然后在对方踏上彼岸的那一刻，悄悄转身，独自走回去。你不是不渴望被人陪，只是太习惯了在别人需要的时候出现，在自己需要的时候消失。\n\n你给了太多人力量，却很少让人看见你也有软脚的时候。你替别人撑着的那把伞，从来没有人替你撑过。你帮别人说了那么多"你可以的"，却在自己最难的深夜，一个字都说不出来。\n\n今天我想做那个替你撑伞的人，告诉你：你不需要永远是那个渡别人的人。你也可以是被渡的那一个。你值得有人来接你，走你走过的那段路。`,
                        quote: `【送给${this.userData.nickname}的一句话】\n"献出你的心，哪怕它会被打碎，因为只有破碎过的心，才真正活过。" ——《呼啸山庄》艾米莉·勃朗特`
                    }
                ];
                // 随机选择一个
                resultData = contingencyOptions[Math.floor(Math.random() * contingencyOptions.length)];
            }

            this._triggerBurst(() => this._showResult(resultData));

        } catch (err) {
            console.error('=== 网络/请求级别失败，触发第二层兜底 ===', err);
            // 网络或接口完全失败时的兜底（保持原有一个作为基础保底）
            this._triggerBurst(() => this._showResult({
                keyword: "燃尽自己的灯",
                content: `${this.userData.nickname}，你身上有一种让我既心疼又敬佩的矛盾：你是那种永远第一个出现在缺口里的人，不是因为你不怕，而是因为你比谁都清楚——如果你不上，那个位置就会空着，而你偏偏做不到袖手旁观。于是你一次又一次地顶上去，撑起了很多人以为理所当然的稳定。\n\n但我想问你一句，这么久了，有没有人问过你累不累？你替那么多人扛了那么多，你自己那盏灯，还剩多少油？你习惯了被需要，却忘了你也可以被照顾。你值得有人在你倒下之前，先把你扶住。\n\n今天，我想替那些被你撑着却忘了回头看你的人，说一声迟到的谢谢：谢谢你一直都在。你的坚持不是理所当然，是你一个选择接着一个选择，用心撑起来的。这种人，不会差的。`,
                quote: `【送给${this.userData.nickname}的一句话】\n"人所能犯的最大错误，就是走在幸福旁边而没有注意到它。" ——《悲惨世界》雨果`
            }));
        }
    }

    // ── 结果页展示 ────────────────────────────────
    _showResult(resultData) {
        this.goToScreen('result-screen');

        const titleEl = document.getElementById('result-title');
        titleEl.innerHTML =
            `${this.userData.nickname}，你是一个` +
            `<span class="result-keyword">「${resultData.keyword}」</span>的人`;

        const divider = document.getElementById('result-divider');
        divider.classList.remove('expanded');
        requestAnimationFrame(() =>
            setTimeout(() => divider.classList.add('expanded'), 200)
        );

        const contentEl = document.getElementById('result-content');
        contentEl.innerHTML = '';
        
        // 分割段落：先按双换行切段，再过滤空段（兼容 \n\n 和单 \n 两种情况）
        const rawContent = resultData.content || '';
        const paragraphs = rawContent.split(/\n\n|\n/).map(p => p.trim()).filter(p => p.length > 0);
        
        // 处理金句 (split, trim)
        const quoteLines = resultData.quote ? resultData.quote.split('\n').filter(p => p.trim()) : [];

        let pIdx = 0;
        let qIdx = 0;

        // 【更新】渲染段落的逻辑：顺滑地把 content 和 quote 敲出来
        const typeNextItem = () => {
            // 1. 先渲染正文 content 的 3 个段落
            if (pIdx < paragraphs.length) {
                const p = document.createElement('p');
                contentEl.appendChild(p);
                // 滚到底部
                requestAnimationFrame(() => contentEl.parentElement.scrollTo({ top: contentEl.parentElement.scrollHeight, behavior: 'smooth' }));

                typewrite(p, paragraphs[pIdx], 30, () => {
                    pIdx++;
                    setTimeout(typeNextItem, 150); // 段落间停顿
                });
            } 
            // 2. 正文敲完，接着敲金句 quote
            else if (qIdx < quoteLines.length) {
                const p = document.createElement('p');
                p.className = 'golden-quote'; // 应用流光亮黄样式

                contentEl.appendChild(p);
                // 滚到底部
                requestAnimationFrame(() => contentEl.parentElement.scrollTo({ top: contentEl.parentElement.scrollHeight, behavior: 'smooth' }));

                typewrite(p, quoteLines[qIdx], 30, () => {
                    p.setAttribute('data-text', quoteLines[qIdx]); // 打完字再加流光
                    qIdx++;
                    setTimeout(typeNextItem, 100); // 金句行间短停顿
                });
            } 
            // 3. 全部敲完
            else {
                this._generateQR();
                this.startResetTimer();
            }
        };

        // 结果卡片展示后延迟开始敲字
        setTimeout(typeNextItem, 800);
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

    // ── 手动重置 ──────────────────────────────────
    manualReset() {
        this._clearResetTimer();
        this._stopProgressBar();
        this.goToScreen('welcome-screen');
    }

    // ── 自动重置（30秒）+ 倒计时进度条 ───────────
    startResetTimer() {
        this._clearResetTimer();
        this._startProgressBar(30000);
        this.resetTimer = setTimeout(() => {
            this._stopProgressBar();
            this.goToScreen('welcome-screen');
        }, 30000);
    }

    _startProgressBar(totalMs) {
        const bar = document.getElementById('reset-progress-bar');
        if (!bar) return;
        bar.style.transition = 'none';
        bar.style.width = '100%';
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                bar.style.transition = `width ${totalMs}ms linear`;
                bar.style.width = '0%';
            });
        });
    }

    _stopProgressBar() {
        const bar = document.getElementById('reset-progress-bar');
        if (!bar) return;
        bar.style.transition = 'none';
        bar.style.width = '100%';
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