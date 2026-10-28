const projects = {
  voice: { type: '01 / LIVE PRODUCTION', title: '甄选的声音之戏剧人生', role: '台口与道具导演', date: '2026.08.07—2026.10.11', summary: '参与东方甄选综艺演出项目，从秀案研讨、音频制作与录音协调，到道具筹备和台口执行，在不同岗位之间做好衔接。', tasks: ['参与秀案策划与方案研讨，协助推动方案从概念到落地。','跟进音频制作与主播录音，协调录音排期与内容质量把控。','负责合同流程跟进，推进条款确认与签署节点。','统筹道具采买与现场执行，完成活动后的报销流程。','负责台口演艺人员现场盯场，保障演出环节按计划执行。'], skills: '秀案讨论 / 跨岗位协调 / 道具统筹 / 台口执行' },
  offer: { type: '02 / SCREEN DIRECTION', title: '甄选的 offer', role: '大屏 PD', date: '2026.09.04—2026.09.06', summary: '负责现场大屏素材与播放调度，在彩排和正式执行中对齐内容、视觉与流程节奏。', tasks: ['参与现场彩排全流程，统筹视频素材整理与归档。','按流程节点准备素材，确保现场所需内容准确就位。','负责大屏素材播放调度，与视觉团队协同完成 cue 点对接。','保障现场呈现与节目流程节奏一致。'], skills: '素材管理 / 彩排配合 / Cue 点对接 / 现场播放' },
  panda: { type: '03 / CULTURAL TOURISM', title: '亚布力熊猫馆清明节活动', role: '产品运营', date: '2026.03—2026.04', summary: '围绕文旅活动，搭建从方案、文案到视频发布的内容链路，以 AI 辅助创作与剪辑配合完成内容交付。', tasks: ['独立撰写活动方案和公众号推文。','结合 AI 工具生成产品宣传视频，并完成后期剪辑。','执行多平台内容发布，串联从文案到视频的交付流程。','运用 AI 辅助内容创作，形成“文案撰写—视频生成—剪辑发布”的一体化工作流。'], skills: '活动方案 / 公众号文案 / AI 视频 / 剪映 / 多平台发布' },
  mic: { type: '04 / WRITING & PERFORMANCE', title: '俱乐部开放麦', role: '脱口秀演员 · 独立撰稿', date: '2025.09—至今', summary: '把对生活细节的观察转化为有结构、有节奏的舞台表达，在写作与表演之间持续打磨自己的内容能力。', tasks: ['独立撰写脱口秀稿件 10+ 篇。','多篇稿件在校内活动中登台表演，并获得正面反馈。','从日常细节中提炼观点，运用结构化幽默完成表达。','持续练习逻辑组织、节奏控制与舞台呈现。'], skills: '生活观察 / 原创撰稿 / 结构化表达 / 舞台节奏' }
};

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
  document.querySelector('#dialog-content').innerHTML = `<p class="modal-kicker">${p.type}</p><h2 class="modal-title" id="dialog-title">${p.title}</h2><p class="modal-role">${p.role} · ${p.date}</p><p class="modal-summary">${p.summary}</p><h3 class="modal-heading">我的工作</h3><ul class="modal-list">${p.tasks.map(task => `<li>${task}</li>`).join('')}</ul><h3 class="modal-heading">项目关键词</h3><p class="modal-summary">${p.skills}</p><p class="modal-notice">以上为个人简历中的项目经历。现场图片、视频与具体作品将在确认展示授权后补充；当前封面为网站主题设计，不代表项目原始视觉。</p><a class="modal-contact" href="mailto:18273607607@163.com">想了解更多？欢迎邮件联系 ↗</a>`;
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
