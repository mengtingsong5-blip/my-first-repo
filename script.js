const projects = {
  voice: { type: '01 / LIVE PRODUCTION', title: '甄选的声音之戏剧人生', role: '台口与道具导演', date: '2026.08.07—2026.10.11', summary: '参与东方甄选综艺演出项目，从秀案研讨、音频制作与录音协调，到道具筹备和台口执行，在不同岗位之间做好衔接。', tasks: ['参与秀案策划与方案研讨，协助推动方案从概念到落地。','跟进音频制作与主播录音，协调录音排期与内容质量把控。','负责合同流程跟进，推进条款确认与签署节点。','统筹道具采买与现场执行，完成活动后的报销流程。','负责台口演艺人员现场盯场，保障演出环节按计划执行。'], skills: '秀案讨论 / 跨岗位协调 / 道具统筹 / 台口执行' },
  offer: { type: '02 / SCREEN DIRECTION', title: '甄选的 offer', role: '大屏 PD', date: '2026.09.04—2026.09.06', summary: '负责现场大屏素材与播放调度，在彩排和正式执行中对齐内容、视觉与流程节奏。', tasks: ['参与现场彩排全流程，统筹视频素材整理与归档。','按流程节点准备素材，确保现场所需内容准确就位。','负责大屏素材播放调度，与视觉团队协同完成 cue 点对接。','保障现场呈现与节目流程节奏一致。'], skills: '素材管理 / 彩排配合 / Cue 点对接 / 现场播放' },
  panda: { type: '03 / CULTURAL TOURISM', title: '亚布力熊猫馆清明节活动', role: '产品运营', date: '2026.03—2026.04', summary: '围绕文旅活动，搭建从方案、文案到视频发布的内容链路，以 AI 辅助创作与剪辑配合完成内容交付。', tasks: ['独立撰写活动方案和公众号推文。','结合 AI 工具生成产品宣传视频，并完成后期剪辑。','执行多平台内容发布，串联从文案到视频的交付流程。','运用 AI 辅助内容创作，形成“文案撰写—视频生成—剪辑发布”的一体化工作流。'], skills: '活动方案 / 公众号文案 / AI 视频 / 剪映 / 多平台发布' },
  mic: { type: '04 / WRITING & PERFORMANCE', title: '俱乐部开放麦', role: '脱口秀演员 · 独立撰稿', date: '2025.09—至今', summary: '把对生活细节的观察转化为有结构、有节奏的舞台表达，在写作与表演之间持续打磨自己的内容能力。', tasks: ['独立撰写脱口秀稿件 10+ 篇。','多篇稿件在校内活动中登台表演，并获得正面反馈。','从日常细节中提炼观点，运用结构化幽默完成表达。','持续练习逻辑组织、节奏控制与舞台呈现。'], skills: '生活观察 / 原创撰稿 / 结构化表达 / 舞台节奏' }
};

Object.assign(projects, {
  account: {type:'05 / SOCIAL MEDIA',title:'从 0 到 1，运营自己的账号',role:'独立拍摄 · 剪辑 · 运营',date:'作品集记录',summary:'个人抖音账号“鬼鬼公主逃跑啦”，围绕穿搭、舞蹈等方向创作内容。作品集自述个人账号粉丝 3500+、单条浏览量破 15 万，出镜合作视频浏览量破 200 万；这些是作品集制作时的记录，不是实时数据。',tasks:['从 0 到 1 搭建个人账号，独立完成拍摄、剪辑与内容运营。','围绕个人内容方向持续发布作品。','通过作品和后台截图记录内容表现，并参与出镜合作。'],skills:'账号定位 / 内容规划 / 拍摄剪辑 / 数据观察'},
  concert: {type:'06 / LIVE EVENT',title:'有澧有 young 歌友会',role:'大学生志愿者',date:'2025.01',summary:'协助本地团委开展歌友会活动，参与前期策划，配合现场执行与流程管理。下方为作品集中收录的真实活动照片。',tasks:['协助活动筹备，参与前期策划并提供创意方案。','配合现场执行与流程管理。','因组织执行表现突出，获评优秀大学生志愿者。'],skills:'前期策划 / 活动配合 / 现场执行'},
  photo: {type:'07 / PORTRAIT PHOTOGRAPHY',title:'蓝色时刻，人物与水岸',role:'人物拍摄作品',date:'作品集选录',summary:'选自个人作品集“拍摄作品人物”章节的五张作品。以水岸、暮光与人物为画面主体。下方完整呈现作品原图，不对拍摄时间、器材或合作对象做额外推断。',tasks:['以人物与环境的关系组织画面。','用不同景别呈现人物姿态与水岸场景。'],skills:'人物拍摄 / 构图 / 影像表达'},
  video: {type:'08 / SHORT-FORM VIDEO',title:'从脚本到画面，短视频创作',role:'短视频创作 · 部分剪辑作品',date:'作品集选录',summary:'选自作品集“短视频创作部分剪辑”章节，包含 AI 风格内容、熊猫主题、人物和活动等视频截图。PDF 中没有可直接播放的视频文件，因此本页展示真实截图，并保留作品集给出的原平台链接。',tasks:['参与短视频内容创作及后期剪辑。','运用剪映等工具处理视频素材，探索 AI 辅助内容生产。'],skills:'短视频 / 剪映 / AI 辅助 / 剪辑表达'}
});

const asset = (name,caption) => ({src:`assets/${name}.webp`,caption});
const galleries = {
  panda: [asset('panda-article','熊猫馆活动图文节选 · 作品集第 9 页'),...['article-1','article-2','article-3'].map((name,i)=>asset(name,`公众号图文选录 ${i+1} · 作品集第 12 页（包含不同主题）`))],
  mic: [1,2,3].map(i=>asset(`writing-${i}`,`脱口秀文稿 ${i} · 作品集第 13 页`)),
  account: [asset('account-home','个人账号主页 · 作品集第 5 页'),asset('account-feed','个人账号作品列表 · 作品集第 5 页'),asset('account-video','个人视频截图 · 作品集第 6 页'),...[1,2,3].map(i=>asset(`account-stats-${i}`,`个人视频数据截图 ${i} · 作品集第 6 页`)),asset('collaboration-video','出镜合作视频截图 · 作品集第 7 页'),asset('collaboration-stats','出镜合作视频数据截图 · 作品集第 7 页')],
  concert: [asset('concert-stage','歌友会现场舞台 · 作品集第 10 页'),asset('concert-group','歌友会现场合影 · 作品集第 10 页')],
  photo: [1,2,3,4,5].map(i=>asset(`portrait-${i}`,`人物拍摄作品 ${i} · 作品集第 14 页`)),
  video: [1,2,3,4,5,6,7,8].map(i=>asset(`video-${i}`,`视频作品截图 ${i} · 作品集第 ${i<=3?16:17} 页`))
};
const originalLinks = {
  panda: [
    ['公众号作品链接 1','https://mp.weixin.qq.com/s/8dzmUsll8GlcKm_GBw3J9Q'],
    ['公众号作品链接 2','https://mp.weixin.qq.com/s/exc00vUg5iiv1cIfiIMJ7w'],
    ['公众号作品链接 3','https://mp.weixin.qq.com/s/WlIhHL4hzSY4ryRrijQrQQ']
  ],
  video: [
    ['前往视频号作品 1','https://weixin.qq.com/sph/A4puuKtCIo'],
    ['前往视频号作品 2','https://weixin.qq.com/sph/A8Cp3HZ7Cu'],
    ['前往抖音作品','https://v.douyin.com/W2x1oFqq3u4/']
  ]
};
function renderGallery(id) {
  const images = galleries[id] || [];
  if (!images.length) return '<p class="modal-notice">该项目在简历中有记录，但本次作品集没有对应现场图片。首页封面为主题设计，不是项目原始视觉。</p>';
  const links = originalLinks[id] || [];
  return `<section class="project-gallery"><h3 class="modal-heading">真实作品 / ${images.length} 张</h3><p class="gallery-help">图片提取自个人作品集。点击图片，在新标签页查看大图；视频截图不支持直接播放。</p><div class="gallery-grid ${id==='photo'?'portrait-gallery':''}">${images.map(img=>`<figure><a href="${img.src}" target="_blank" rel="noopener" aria-label="查看大图：${img.caption}"><img src="${img.src}" alt="${img.caption}" loading="lazy"><span class="zoom-label">查看大图 ↗</span></a><figcaption>${img.caption}</figcaption></figure>`).join('')}</div>${links.length?`<div class="original-links"><h3 class="modal-heading">作品集中的原平台链接</h3><p class="gallery-help">以下链接摘录自作品集，未重新验证可用性；原平台可能需要登录或在微信、抖音中打开。链接不与上方截图逐一对应。</p>${links.map(([label,url])=>`<a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`).join('')}</div>`:''}</section>`;
}

const filterButtons = document.querySelectorAll('[data-filter]');
filterButtons.forEach(button => button.addEventListener('click', () => {
  filterButtons.forEach(item => {const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active));});
  let count = 0;
  document.querySelectorAll('.project').forEach(card => {card.hidden = button.dataset.filter !== 'all' && card.dataset.category !== button.dataset.filter; if (!card.hidden) count++;});
  document.querySelector('.project-count').textContent = `${count} 个项目`;
}));

const dialog = document.querySelector('#project-dialog');
let lastTrigger;
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const p = projects[button.dataset.project];
  // These are trusted local project descriptions, not user-supplied HTML.
  document.querySelector('#dialog-content').innerHTML = `<p class="modal-kicker">${p.type}</p><h2 class="modal-title" id="dialog-title">${p.title}</h2><p class="modal-role">${p.role} · ${p.date}</p><p class="modal-summary">${p.summary}</p><h3 class="modal-heading">我的工作</h3><ul class="modal-list">${p.tasks.map(task => `<li>${task}</li>`).join('')}</ul><h3 class="modal-heading">项目关键词</h3><p class="modal-summary">${p.skills}</p>${renderGallery(button.dataset.project)}<a class="modal-contact" href="mailto:18273607607@163.com">想了解更多？欢迎邮件联系 ↗</a>`;
  lastTrigger = button;
  dialog.showModal();
  dialog.scrollTop = 0;
  document.body.classList.add('modal-open');
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) {const bounds = dialog.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();}
});
dialog.addEventListener('close', () => {document.body.classList.remove('modal-open'); lastTrigger?.focus({preventScroll:true});});

document.querySelector('#copy-email').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {await navigator.clipboard.writeText('18273607607@163.com'); status.textContent = '邮箱已复制';}
  catch {status.textContent = '请长按或选中左侧邮箱复制';}
  setTimeout(() => {status.textContent = '';}, 5000);
});
