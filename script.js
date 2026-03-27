const stories = [
    {
        id: 1,
        text1: "暮色时分，你独自走进一座无人的古镇。石板路尽头有一间亮着灯的茶馆，推门而入，桌上摆着几样东西——",
        options1: [
            { text: "一块温热的桂花糕", tag: "渴望温暖与安全感" },
            { text: "一杯冒着热气的陈皮茶", tag: "内心疲惫、需要舒缓" },
            { text: "一封没有署名的信", tag: "好奇心强、期待未知" },
            { text: "一面落满灰尘的铜镜", tag: "正在自我审视与反思" },
            { text: "一只趴在窗台的橘猫", tag: "渴望陪伴与轻松感" },
            { text: "一本翻开一半的旧书", tag: "追求意义感与深度" }
        ],
        text2: "茶馆老板从后厨走出来，看着你选择的东西，问你想不想听一个关于它的故事。你——",
        options2: [
            { text: "立刻说好，迫不及待想知道", tag: "行动力强、外向" },
            { text: "犹豫了一下但还是点了头", tag: "谨慎但愿意尝试" },
            { text: "说不急，先把茶喝完再说", tag: "从容不迫、享受当下" },
            { text: "反问他“这故事是你编的吗？”", tag: "洞察力强、喜欢掌握主动权" },
            { text: "笑了笑没说话，等他自己讲", tag: "内敛、善于倾听" }
        ]
    },
    {
        id: 2,
        text1: "你在起雾的森林里迷了路，正焦急时，前方出现了一座木屋。推开虚掩的门，壁炉正烧得旺盛，桌上放着——",
        options1: [
            { text: "一碗热腾腾的蘑菇汤", tag: "渴望被照顾与疗愈" },
            { text: "一张标记着路线的地图", tag: "理性、寻找方向感" },
            { text: "一把精致的银色小刀", tag: "防御心强、缺乏安全感" },
            { text: "一个上锁的神秘木盒", tag: "富有探险精神" },
            { text: "一束还没枯萎的野花", tag: "浪漫主义、热爱生活" },
            { text: "一只正在打呼噜的小狗", tag: "渴望纯粹的陪伴" }
        ],
        text2: "这时，屋主——一位白发苍苍的老奶奶提着一篮浆果走了进来，微笑着递给你一颗。你会——",
        options2: [
            { text: "大方接过来立刻吃掉", tag: "性格直爽、容易信任他人" },
            { text: "接过来但悄悄放进口袋", tag: "谨慎小心、自我保护意识强" },
            { text: "询问她是不是住在这里", tag: "喜欢探究、关注他人" },
            { text: "表示感谢并想帮她提篮子", tag: "乐于助人、共情能力强" },
            { text: "有些不知所措地站在原地", tag: "社恐、慢热" }
        ]
    },
    {
        id: 3,
        text1: "深夜，你登上一列空无一人的末班电车。窗外是漫天星光，你走到一个空位坐下，发现座位旁边留着——",
        options1: [
            { text: "一个正在播放轻音乐的耳机", tag: "渴望与世界隔绝、需要独处" },
            { text: "一张写着“祝你好运”的字条", tag: "需要外界的肯定与鼓励" },
            { text: "一把没打开过的透明雨伞", tag: "未雨绸缪、心思细腻" },
            { text: "一个老式的机械怀表", tag: "怀旧、对时间感到焦虑" },
            { text: "一罐没开封的冰镇汽水", tag: "渴望释放压力与痛快" },
            { text: "一本画满涂鸦的速写本", tag: "内心丰富、富有创造力" }
        ],
        text2: "电车突然在不知名的站点停下，车门缓缓打开，外面是一片发光的海滩。广播里说这里可以停留十分钟，你会——",
        options2: [
            { text: "立刻冲下去踩水", tag: "充满活力、随性而为" },
            { text: "走到车门边看看不下去", tag: "保守、不敢轻易打破规则" },
            { text: "坐在原位静静欣赏", tag: "内心平静、享受距离美" },
            { text: "拿出手机疯狂拍照", tag: "害怕遗忘、喜欢记录生活" },
            { text: "闭上眼睛感受海风", tag: "注重感官体验、内心浪漫" }
        ]
    },
    {
        id: 4,
        text1: "你独自来到海边一座废弃的灯塔，沿着旋转楼梯爬到顶层，视野豁然开朗。在控制台上，你发现了一样东西——",
        options1: [
            { text: "一架生锈的黄铜望远镜", tag: "高瞻远瞩、对未来充满期待" },
            { text: "一个仍在发光的玻璃球", tag: "心中保有希望、不愿放弃" },
            { text: "一本日记，记录着每天的潮汐", tag: "做事有条理、心思缜密" },
            { text: "一个海螺，放在耳边能听到歌声", tag: "内心孤独、渴望被理解" },
            { text: "一张褪色的旧照片", tag: "念旧、重感情" },
            { text: "一盏随时会熄灭的煤油灯", tag: "充满危机感、神经紧绷" }
        ],
        text2: "太阳开始落山，海平面染成了橘红色。忽然，望远镜里闪烁起一阵奇怪的信号光，仿佛在召唤你。你会——",
        options2: [
            { text: "尝试用灯塔的灯光回应", tag: "勇敢、喜欢迎接挑战" },
            { text: "假装没看见，准备下楼", tag: "逃避未知、害怕惹麻烦" },
            { text: "仔细观察并记录信号规律", tag: "理性分析、冷静沉着" },
            { text: "感到兴奋，猜测这是外星人", tag: "想象力丰富、性格跳脱" },
            { text: "静静看着它，直到光芒消失", tag: "顺其自然、有宿命感" }
        ]
    },
    {
        id: 5,
        text1: "你偶然推开了城市一栋高楼天台的门，发现这里竟隐藏着一个生机盎然的秘密花园。在花丛中央，你被一样东西吸引——",
        options1: [
            { text: "一个正在滴水的复古水壶", tag: "享受付出、有滋养他人的愿望" },
            { text: "一把舒服的藤编摇椅", tag: "极度疲倦、渴望停下休息" },
            { text: "一株开得正艳却叫不出名字的花", tag: "追求独特性、不落俗套" },
            { text: "一个装满彩色石子的玻璃罐", tag: "内心保留着纯真与童心" },
            { text: "一架被藤蔓缠绕的旧秋千", tag: "怀念过去无忧无虑的时光" },
            { text: "一个悬挂在半空的风铃", tag: "敏感细腻、容易被小事物打动" }
        ],
        text2: "一阵微风吹过，花园角落里忽然传来一阵细微的哭泣声。你走近一看，是一个迷路的小精灵。你会——",
        options2: [
            { text: "温柔地问她怎么了", tag: "充满母性/父性光辉、包容" },
            { text: "四处张望帮她找回家的路", tag: "行动导向、善于解决问题" },
            { text: "在一旁默默陪着她等她哭完", tag: "理解他人的边界感、克制" },
            { text: "变个魔术或者讲笑话逗她", tag: "幽默风趣、善于活跃气氛" },
            { text: "觉得不可思议，先掐自己一下", tag: "务实、对魔幻事物保持怀疑" }
        ]
    },
    {
        id: 6,
        text1: "倾盆大雨中，你躲进了一家昏暗的旧书店。空气里弥漫着纸张发霉的味道。在最深处的书架上，你抽出了——",
        options1: [
            { text: "一本没有封面的厚重手稿", tag: "探究欲强、不拘泥于表象" },
            { text: "一本带锁的密码日记本", tag: "重视隐私、有自己的秘密" },
            { text: "一本关于宇宙起源的画册", tag: "格局宏大、思维发散" },
            { text: "一本教人如何种植玫瑰的指南", tag: "热爱生活、注重实践" },
            { text: "一本满是批注的诗集", tag: "文艺敏感、共情能力极强" },
            { text: "一本夹着干枯四叶草的童话书", tag: "相信奇迹、内心柔软" }
        ],
        text2: "正当你翻阅时，书页里掉出一张泛黄的车票，日期竟然是明天。书店老板意味深长地看着你，你会——",
        options2: [
            { text: "问老板这张票是去哪里的", tag: "好奇心重、喜欢追根究底" },
            { text: "把车票夹回去，放回书架", tag: "不想惹事、生活循规蹈矩" },
            { text: "把车票收进口袋，决定明天去看看", tag: "大胆冒险、热爱刺激" },
            { text: "把车票交给老板说是别人掉的", tag: "拾金不昧、有强烈的道德感" },
            { text: "看着车票发呆，思绪飘远", tag: "多愁善感、容易陷入回忆" }
        ]
    },
    {
        id: 7,
        text1: "凌晨两点，你走进一家还在营业的深夜食堂。老板擦着吧台问你想吃点什么，你环顾四周，目光停留在了——",
        options1: [
            { text: "角落里咕嘟冒泡的关东煮", tag: "渴望平实而持久的温暖" },
            { text: "招牌上的那道‘忘忧炒饭’", tag: "心中有事、渴望解脱" },
            { text: "别人桌上一杯加了冰块的梅酒", tag: "想要微醺、放松紧绷的神经" },
            { text: "刚刚出炉、香气四溢的烤肉", tag: "欲望强烈、需要直接的满足" },
            { text: "一碗清淡热乎的清汤面", tag: "追求返璞归真、简单生活" },
            { text: "一份造型精致的抹茶甜点", tag: "注重仪式感、即使疲惫也要体面" }
        ],
        text2: "吃完后，老板递给你一个幸运饼干，说里面藏着一句预言。你掰开饼干，里面竟然是一张空白纸条。你会——",
        options2: [
            { text: "大笑说老板在开玩笑", tag: "性格豁达、不拘小节" },
            { text: "自己找笔在上面写下一句话", tag: "命运掌握在自己手中的信念感" },
            { text: "认真问老板这是什么意思", tag: "执着于答案、有些较真" },
            { text: "无所谓地把它扔进垃圾桶", tag: "不迷信、活在当下" },
            { text: "小心翼翼地收进钱包里", tag: "觉得一切都有深意、敬畏未知" }
        ]
    },
    {
        id: 8,
        text1: "你误入了一家堆满各种钟表的古董店，滴答声此起彼伏。在最显眼的位置，摆着一样特殊的计时器——",
        options1: [
            { text: "一个里面的沙子往上流的沙漏", tag: "想要逆转时光、有遗憾" },
            { text: "一块永远停在中午十二点的怀表", tag: "渴望留住最辉煌/美好的瞬间" },
            { text: "一个没有指针只有表盘的挂钟", tag: "希望摆脱束缚、向往自由" },
            { text: "一个走得飞快的电子秒表", tag: "生活节奏快、充满焦虑感" },
            { text: "一个需要每天上发条的音乐盒", tag: "喜欢规律和仪式感" },
            { text: "一个能显示你剩余寿命的计时器", tag: "直面生死、极度理性" }
        ],
        text2: "钟表匠告诉你，这件物品可以带走，但代价是用你的一段记忆来交换。你会——",
        options2: [
            { text: "毫不犹豫地答应，因为早想忘了", tag: "果断、有强烈的告别欲" },
            { text: "坚决拒绝，记忆才是最宝贵的", tag: "珍视过去、自我认同感高" },
            { text: "犹豫不决，问能不能用别人的记忆", tag: "圆滑机智、善于讨价还价" },
            { text: "问他想换哪一段，由他挑", tag: "随遇而安、听天由命" },
            { text: "转身就走，觉得这人是个疯子", tag: "现实主义者、警惕性高" }
        ]
    }
];

class KuakuaApp {
    constructor() {
        this.userData = {
            nickname: '',
            tag1: '',
            tag2: ''
        };
        this.currentStory = null;
        this.resetTimer = null;
        this.minimaxApiKey = 'sk-api-_lSfvrTWwbGAncb6K8nDcbCVc_Sj8NS067VEWMHkhEm9r3ODZb_uYOcb5no20bjSxCxaBu-kHP3Onk94wFAx0pdTmmSZLVS37OqUiTnynPTFB0DMk6_CvXA';
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        const input = document.getElementById('nickname-input');
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.submitName();
            }
        });

        // Reset timer on touch/click in result screen to give them more time if they are actively reading
        const resultScreen = document.getElementById('result-screen');
        resultScreen.addEventListener('click', () => {
            if (this.resetTimer) {
                this.startResetTimer();
            }
        });
        resultScreen.addEventListener('touchstart', () => {
            if (this.resetTimer) {
                this.startResetTimer();
            }
        });
    }

    goToScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        const nextScreen = document.getElementById(screenId);
        nextScreen.classList.add('active');

        // Reset inputs if going back to welcome
        if (screenId === 'welcome-screen') {
            document.getElementById('nickname-input').value = '';
            this.userData = { nickname: '', tag1: '', tag2: '' };
            this.clearResetTimer();
        }

        // Setup story if going to story 1
        if (screenId === 'story-1-screen') {
            this.setupStory();
        }
    }

    submitName() {
        const input = document.getElementById('nickname-input');
        const name = input.value.trim();
        if (name) {
            this.userData.nickname = name;
            this.goToScreen('story-1-screen');
        } else {
            // Shake effect or simple alert
            input.style.borderBottomColor = 'red';
            setTimeout(() => input.style.borderBottomColor = 'var(--primary-color)', 500);
        }
    }

    setupStory() {
        // Pick a random story
        const randomIndex = Math.floor(Math.random() * stories.length);
        this.currentStory = stories[randomIndex];

        // Setup Story 1
        document.getElementById('story-1-text').innerText = this.currentStory.text1;
        const options1Container = document.getElementById('story-1-options');
        options1Container.innerHTML = '';
        
        this.currentStory.options1.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn fade-in';
            btn.innerText = opt.text;
            btn.onclick = () => this.handleOption1(opt.tag);
            options1Container.appendChild(btn);
        });
    }

    handleOption1(tag) {
        this.userData.tag1 = tag;
        
        // Setup Story 2
        document.getElementById('story-2-text').innerText = this.currentStory.text2;
        const options2Container = document.getElementById('story-2-options');
        options2Container.innerHTML = '';
        
        this.currentStory.options2.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'option-btn fade-in';
            btn.innerText = opt.text;
            btn.onclick = () => this.handleOption2(opt.tag);
            options2Container.appendChild(btn);
        });

        this.goToScreen('story-2-screen');
    }

    handleOption2(tag) {
        this.userData.tag2 = tag;
        this.goToScreen('loading-screen');
        this.generateKuakua();
    }

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
  "keyword": "性格关键词（4-6个字，如'温柔又清醒'）",
  "content": "夸赞正文（100-150字，可包含段落换行符\\\\n）"
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

            if (!response.ok) {
                throw new Error('API request failed');
            }

            const data = await response.json();
            const replyText = data.choices[0].message.content.trim();
            
            // Try parsing JSON
            let resultData;
            try {
                // Remove potential markdown wrappers like ```json
                let cleanText = replyText.replace(/```json/g, '').replace(/```/g, '').trim();
                resultData = JSON.parse(cleanText);
            } catch (e) {
                console.error("Failed to parse JSON:", replyText);
                // Fallback parsing if LLM didn't return perfect JSON
                resultData = {
                    keyword: "温暖而独特",
                    content: `${this.userData.nickname}，你总是默默扛下很多事情，但请记住你的光芒无法被掩盖。愿你被这个世界温柔以待，2026年，去拥抱更广阔的天空吧！`
                };
            }

            this.showResult(resultData);

        } catch (error) {
            console.error('Error fetching AI response:', error);
            // Fallback content in case of network error
            this.showResult({
                keyword: "坚韧且温柔",
                content: `${this.userData.nickname}，也许最近的你有些疲惫，但你所展现出的那种小心翼翼的温柔，和面对未知时仍然愿意迈出一步的勇气，真的非常迷人。你比你想象的还要好。\n\n不要总是把自己逼得太紧，允许自己偶尔停下来喘口气。去感受那些微小的确幸吧，因为你值得这世间所有的美好。`
            });
        }
    }

    showResult(resultData) {
        document.getElementById('result-title').innerText = `${this.userData.nickname}，你是一个「${resultData.keyword}」的人`;
        
        // Format paragraphs
        const contentHtml = resultData.content.split('\n').filter(p => p.trim()).map(p => `<p>${p}</p>`).join('');
        document.getElementById('result-content').innerHTML = contentHtml;

        // Generate QR code (random link for demo, or a specific save link)
        const qrContainer = document.getElementById('qrcode');
        qrContainer.innerHTML = '';
        new QRCode(qrContainer, {
            text: "https://example.com/kuakua?id=" + Math.random().toString(36).substring(7),
            width: 100,
            height: 100,
            colorDark : "#d4a373",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.L
        });

        this.goToScreen('result-screen');

        // Auto reset after 15 seconds of inactivity on result screen
        this.startResetTimer();
    }

    startResetTimer() {
        this.clearResetTimer();
        this.resetTimer = setTimeout(() => {
            this.goToScreen('welcome-screen');
        }, 15000); // 15 seconds
    }

    clearResetTimer() {
        if (this.resetTimer) {
            clearTimeout(this.resetTimer);
            this.resetTimer = null;
        }
    }
}

// Initialize App
const app = new KuakuaApp();
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
