const languageButtons = document.querySelectorAll('[data-language]');
const translatable = document.querySelectorAll('[data-en][data-zh]');
const languageStorageKey = 'qili-xu-language';

const projectCatalogue = {
  'between-tongues': {
    number: '01', title: 'Between Tongues', titleZh: '在语言之间',
    meta: { en: "4K video, colour, silent, 00'52'' (time-lapse of 1 hour), 2025", zh: '4K 影像，彩色，无声，00分52秒（1小时延时），2025' },
    description: {
      en: 'The work is composed of four layers: a stone, a sheet of soluble paper bearing the word “stone” in my mother tongue, a block of ice, and an insoluble sheet inscribed with the word “stone” in five foreign languages. As the ice melts, water dissolves the word in my mother tongue, leaving only the stone and the foreign words.\n\nDrawing from my own experience of learning foreign languages, the work considers how language can reshape identity and perception. As foreign vocabulary begins to signify on its own, it opens another symbolic system through which to perceive and articulate the self.',
      zh: '作品由四层构成：石头、写有母语“石头”的可溶纸、冰块，以及写有五种外语“石头”的不可溶纸。随着冰块融化，水逐渐溶解母语纸上的文字，最终只留下石头与外语词汇。\n\n作品源于我学习外语的经验，并思考语言如何重塑身份与感知。当外语词汇开始独立地指涉意义，它便打开了另一套感知与表达自我的符号系统。'
    },
    link: 'https://youtu.be/W0IJeSB_Aq4', linkLabel: { en: 'Watch video ↗', zh: '观看影像 ↗' },
    videoPreview: 'https://i.ytimg.com/vi/W0IJeSB_Aq4/maxresdefault.jpg',
    videoPreviewFallback: 'https://i.ytimg.com/vi/W0IJeSB_Aq4/hqdefault.jpg',
    showWatchLink: false,
    detailLayout: 'between',
    galleryLayout: 'row',
    images: [
      'assets/projects/gallery/between-tongues/01.jpg',
      'assets/projects/gallery/between-tongues/02.jpg',
      'assets/projects/gallery/between-tongues/03.jpg',
      'assets/projects/gallery/between-tongues/04.jpg'
    ]
  },
  'the-calling': {
    number: '02', title: 'The Calling', titleZh: '呼唤',
    meta: { en: 'Photographs, various dimensions, 2025', zh: '摄影，不同尺寸，2025' },
    description: {
      en: 'During a summer retreat to Jiugong Mountain in Hubei Province, my gaze gradually shifted from the neon lights and constant traffic of the city to enveloping forests and greenery. In the mountains, everything slowed; everything grew quiet.\n\nThrough repeated moments of pausing, gazing, and walking, I sought to capture drifting mist, vast woodland, and intermittent traces of human presence. Rendered in a dark-green tonality, these images blur the boundary between reality and dream.',
      zh: '湖北九宫山的一次夏日旅居中，我的目光逐渐从城市的霓虹与不息车流，转向包覆四周的森林与绿意。在山中，一切都慢下来，也都安静下来。\n\n在反复的停留、凝视与行走中，我试图捕捉漂浮的雾、广阔的林地与间歇出现的人类痕迹。以深绿色调呈现的图像，让现实与梦境的边界在图像语言中变得模糊。'
    },
    link: 'https://youtu.be/7W6ZlK3SSBo', linkLabel: { en: 'Watch photo book ↗', zh: '观看摄影书 ↗' },
    detailLayout: 'calling',
    galleryLayout: 'calling-rhythm',
    galleryGroups: [
      [
        'assets/projects/gallery/the-calling/07.jpg',
        'assets/projects/gallery/the-calling/02.jpg'
      ],
      ['assets/projects/gallery/the-calling/05.jpg'],
      ['assets/projects/gallery/the-calling/06.jpg'],
      ['assets/projects/gallery/the-calling/04.jpg'],
      ['assets/projects/gallery/the-calling/01.jpg'],
      ['assets/projects/gallery/the-calling/03.jpg']
    ],
    postTextGallery: [
      'assets/projects/gallery/the-calling/08.jpg',
      'assets/projects/gallery/the-calling/09.jpg'
    ]
  },
  'until-it-all-fades-away': {
    number: '03', title: 'Until It All Fades Away', titleZh: '直到一切烟消云散',
    meta: { en: "4K synchronous dual-channel video, colour, stereo sound, 10'52'', 2025", zh: '4K 同步双屏影像，彩色，立体声，10分52秒，2025' },
    description: {
      en: 'Before China’s Reform and Opening, national policy prioritized urban development and heavy industry, and university graduates were assigned jobs in designated work units. My father was among the first generation of university students to grow up in this context.\n\nTaking my father’s oral account as a thread, the work unfolds around places where he once lived. I seek to trace his experiences through gestures and language, juxtaposing two repetitive actions—my planting of young trees and his hammering of nails—and layering my voice with his in the narration. The work is an attempt to preserve personal memory while opening a view onto the tension between systemic forces and individual agency.',
      zh: '改革开放以前，国家政策优先发展城市与重工业，大学毕业生被分配到指定工作单位。父亲正是在这一背景下成长的第一代大学生之一。\n\n作品以父亲的口述为线索，围绕他曾居住过的地点展开。我试图通过动作和语言追索他的经历：将我栽种幼树与他钉钉子的两个重复动作并置，并在叙述中将我的声音与他的声音层叠。作品试图保存个人记忆，同时呈现系统性力量与个体能动性之间的张力。'
    },
    link: 'https://youtu.be/cgzuVu_2ud8', linkLabel: { en: 'Watch video ↗', zh: '观看影像 ↗' },
    videoPreview: 'https://i.ytimg.com/vi/cgzuVu_2ud8/maxresdefault.jpg',
    videoPreviewFallback: 'https://i.ytimg.com/vi/cgzuVu_2ud8/hqdefault.jpg',
    showWatchLink: false,
    detailLayout: 'until',
    galleryLayout: 'until-video',
    images: [
      'assets/projects/gallery/until-it-all-fades-away/4-left.jpeg',
      'assets/projects/gallery/until-it-all-fades-away/4-right.jpeg'
    ]
  },
  'transit-silence': {
    number: '04', title: 'Transit Silence', titleZh: '流动的静默',
    meta: { en: "4k synchonous dual-channel video, black & white, sound without dialogue, original music by Morton Feldman, 04'36'', 2025", zh: '4K 同步双屏影像，黑白，无对白声音，Morton Feldman 原创音乐，04分36秒，2025' },
    description: {
      en: 'This video work approaches the subway as a space of rupture rather than connection. It draws people away from the world above ground and into an enclosed, temporary state: the sky gives way to low ceilings, and open space is compressed. Bodies are pressed together, yet people remain isolated; the surrounding noise seems to lose its voice, becoming a silent backdrop to one another.\n\nDrawing on stop-motion animation, I juxtapose the lateral movement of bodies with reflections gliding across stainless-steel surfaces. Alternating between emptiness and crowding, the work traces the mechanical rhythms and fractures of modern urban life, along with a sense of bodily and perceptual dislocation. Its circular structure, linking beginning and end, underscores the rupture between underground and surface space.',
      zh: '这件影像作品将地铁视为一个断裂的空间，而非连接的象征。它将人们从地面世界带离，置入一种封闭而暂时的状态：天空让位于低矮的天花板，开放空间也被压缩。身体彼此紧贴，人却依然孤立；周围的噪音仿佛失去了声音，成为彼此沉默的背景。\n\n受定格动画启发，我将身体的横向移动与不锈钢表面滑过的反光并置。在空无与拥挤之间切换时，作品追索现代都市生活中机械性的节奏与断裂，以及身体与感知的失位。连接开端与结尾的循环结构，进一步强调了地下与地面空间之间的感知断裂。'
    },
    link: 'https://youtu.be/OFoXaO2rBkc', linkLabel: { en: 'Watch video ↗', zh: '观看影像 ↗' },
    videoPreview: 'https://i.ytimg.com/vi/OFoXaO2rBkc/maxresdefault.jpg',
    videoPreviewFallback: 'https://i.ytimg.com/vi/OFoXaO2rBkc/hqdefault.jpg',
    showWatchLink: false,
    galleryLayout: 'transit',
    postTextGallery: [
      'assets/projects/gallery/transit-silence/03.jpg',
      'assets/projects/gallery/transit-silence/01.jpg',
      'assets/projects/gallery/transit-silence/04.jpg'
    ]
  },
  'still-forward-looking-back': {
    number: '05', title: 'Still, Forward and Looking Back', titleZh: '静止、前进与回望',
    meta: { en: "4K video, colour & b/w, stereo sound, 09'46'', 2025", zh: '4K 影像，彩色与黑白，立体声，09分46秒，2025' },
    description: {
      en: 'This short film traces a journey through my hometown, Wuhan, and through the memories that bind me to it. In the late 1950s, the first steel conglomerate built after the founding of New China was established in Wuhan’s Qingshan District. The industrial district created for the steel plant brought many families to the area and gave rise to a well-equipped residential community for its workers. Today, this steel fortress is slowly rusting and falling into disrepair, while the neighborhood where I once lived has disappeared. Yet this absent past continues to shape the reality of my memory.\n\nThe film attends to a past that cannot be recovered. I transform images carrying memory from this period of transition into fragmented montage compositions, blurring and distorting them in unruly combinations to question a destination that can never be fully reached.\n\nThe journey begins in the past and moves towards an uncertain destination—one that may gradually blur and dissolve. It is a process of searching and moving forward, but perhaps also an encounter with an irretrievable past that lingers in the gap between reality and expectation.\n\nThrough this film, I seek to trace this past in order to understand the present, and to connect an intimate history with a broader condition of being. Within grand narratives, we are compelled to open ourselves and move forward, yet we repeatedly return to the subtle textures of individual life.',
      zh: '这部短片追索一段穿越家乡武汉的旅程，也追索将我与这座城市相连的记忆。20 世纪 50 年代末，新中国成立后建设的第一座钢铁联合企业落址武汉青山区。围绕钢铁厂形成的工业区吸引许多家庭迁入，也逐渐形成了设施完善的职工生活社区。如今，这座钢铁堡垒缓慢锈蚀、失修，而我曾生活过的社区也已消失。可是，这段缺席的过去仍在塑造我记忆中的现实。\n\n影片关注一段无法被复原的过去。我将这一转型时期承载记忆的图像转化为碎片化的蒙太奇组合，以不规则的方式模糊、变形它们，并追问一个永远无法被完全抵达的目的地。\n\n这段旅程起于过去，向一个不确定的目的地行进——它也许会逐渐模糊、消散。旅程既是寻找与前行的过程，也或许是与一段无法挽回的过去相遇；它停留在现实与期待之间的缝隙中。\n\n通过这部短片，我试图追索过去，从而理解当下，并把一段私密的历史连接到更普遍的存在状态之中。在宏大叙事里，我们不得不打开自己、继续向前，却又一次次回到细微的个人生活纹理。'
    },
    link: 'https://youtu.be/SjEFXH8nI6c', linkLabel: { en: 'Watch video ↗', zh: '观看影像 ↗' },
    videoPreview: 'https://i.ytimg.com/vi/SjEFXH8nI6c/maxresdefault.jpg',
    videoPreviewFallback: 'https://i.ytimg.com/vi/SjEFXH8nI6c/hqdefault.jpg',
    showWatchLink: false,
    galleryLayout: 'still',
    galleryGroups: [[
      'assets/projects/gallery/still-forward-looking-back/02.jpg',
      'assets/projects/gallery/still-forward-looking-back/07.jpg',
      'assets/projects/gallery/still-forward-looking-back/03.jpg',
      'assets/projects/gallery/still-forward-looking-back/04.jpg'
    ]
    ]
  },
  'to-bloom-in-the-dark': {
    number: '06', title: 'To Bloom in the Dark', titleZh: '于黑夜绽放',
    meta: { en: 'Photographs, various dimensions, 2024', zh: '摄影，不同尺寸，2024' },
    description: {
      en: 'Night is quiet, light, obscure yet like a transparent and pure medium. It is the continuation rather than opposition of light. It is the place of contradiction to illuminate words, dissolving all subject-object oppositions and solidified meanings. For me, night is such an anonymous existence.\n\nThe inspiration of these photos is deposited in such imagination of night. The images show pot plants seen everywhere that are particularly cultivated to decorate the city. However, they exist, but are simply watched, picked or even ignored. Here inn this series, I imagine myself as an adventurous outcomer bumping into this secret garden in the night. Wrapped in the thick darkness, the flowers seem so soft and firm, mysterious and striking; they unfold the life itself by some unspeakable gesture; so dramastic, so unreal, like a dream which may have ended long ago and never come back. It is a momentary gaiety, and will dissipate in the next second.\n\nFrozen in a moment, these images present a heterogeneous space where the obscured and forgotten exist. They are so exposed in the night and so gestured, imprinted on memory.',
      zh: '夜晚安静、明亮、幽暗，却像一种透明而纯粹的媒介。它不是光的对立面，而是光的延续。它是一个以矛盾照亮词语的地方，消解所有主客体的对立与凝固的意义。对我而言，夜晚正是这样一种匿名的存在。\n\n这些照片的灵感沉积于我对夜晚的想象之中。图像呈现的是城市里随处可见、被特别栽培来装饰城市的盆栽植物。然而，它们存在着，却只是被观看、采摘，甚至被忽视。在这一系列中，我想象自己是一个冒险的闯入者，在夜里偶遇这座秘密花园。被浓重的黑暗包裹，花朵显得如此柔软而坚定，神秘而醒目；它们以某种难以言说的姿态展开生命本身；如此戏剧化，如此不真实，像一场或许早已结束、再也不会归来的梦。那是短暂的欢愉，并将在下一秒消散。\n\n凝固于一个瞬间，这些图像呈现出一个被遮蔽与遗忘之物得以存在的异质空间。它们在夜晚如此暴露，如此姿态化，被印刻进记忆。'
    },
    galleryLayout: 'bloom',
    galleryGroups: [
      ['assets/projects/gallery/to-bloom-in-the-dark-2026/00-main.jpg'],
      [
        'assets/projects/gallery/to-bloom-in-the-dark-2026/01.jpg',
        'assets/projects/gallery/to-bloom-in-the-dark-2026/02.jpg'
      ],
      ['assets/projects/gallery/to-bloom-in-the-dark-2026/03.jpg'],
      [
        'assets/projects/gallery/to-bloom-in-the-dark-2026/04.jpg',
        'assets/projects/gallery/to-bloom-in-the-dark-2026/05.jpg'
      ],
      [
        'assets/projects/gallery/to-bloom-in-the-dark-2026/06.jpg',
        'assets/projects/gallery/to-bloom-in-the-dark-2026/07.jpg'
      ]
    ]
  }
};

function syncHomeHeroShift() {
  const hero = document.querySelector('.hero');
  const name = document.querySelector('.hero__title');
  if (!hero || !name) return;

  hero.style.setProperty('--hero-name-shift', `${name.getBoundingClientRect().width * (2 / 3)}px`);
}

function scheduleHomeHeroShift() {
  requestAnimationFrame(() => requestAnimationFrame(syncHomeHeroShift));
}

function syncCallingTitleAlignment() {
  const detail = document.querySelector('.project-detail--calling');
  const title = document.querySelector('.project-detail__title');
  const firstImage = document.querySelector('.project-detail__composition--calling-rhythm-1 img:first-child');
  if (!detail || !title || !firstImage) return;

  firstImage.style.setProperty('--calling-title-align-shift', '0px');
  const offset = title.getBoundingClientRect().left - firstImage.getBoundingClientRect().left;
  firstImage.style.setProperty('--calling-title-align-shift', `${offset}px`);
}

function scheduleCallingTitleAlignment() {
  requestAnimationFrame(() => requestAnimationFrame(syncCallingTitleAlignment));
}

function renderProjectDetail(language = document.documentElement.lang === 'zh-CN' ? 'zh' : 'en') {
  const root = document.getElementById('project-detail');
  if (!root) return;

  const work = new URLSearchParams(window.location.search).get('work') || 'between-tongues';
  const project = projectCatalogue[work] || projectCatalogue['between-tongues'];
  root.classList.toggle('project-detail--transit', project.galleryLayout === 'transit');
  root.classList.toggle('project-detail--still', project.galleryLayout === 'still');
  root.classList.toggle('project-detail--bloom', project.galleryLayout === 'bloom');
  root.classList.toggle('project-detail--between', project.detailLayout === 'between');
  root.classList.toggle('project-detail--until', project.detailLayout === 'until');
  root.classList.toggle('project-detail--calling', project.detailLayout === 'calling');
  document.body.classList.toggle('project-detail-page--bloom', project.galleryLayout === 'bloom');
  const displayTitle = language === 'zh' && project.titleZh ? project.titleZh : project.title;
  const index = Object.keys(projectCatalogue).indexOf(work);
  const keys = Object.keys(projectCatalogue);
  const current = index === -1 ? 0 : index;
  const previous = projectCatalogue[keys[(current - 1 + keys.length) % keys.length]];
  const next = projectCatalogue[keys[(current + 1) % keys.length]];

  document.getElementById('project-number').textContent = project.number;
  document.getElementById('project-title').textContent = displayTitle;
  document.getElementById('project-meta').textContent = project.meta[language];
  document.getElementById('project-text').textContent = project.description[language];
  document.title = `${displayTitle} - ${language === 'zh' ? '徐啟笠' : 'Qili Xu'}`;

  const watch = document.getElementById('project-watch');
  watch.hidden = !project.link || project.showWatchLink === false;
  if (project.link) {
    watch.href = project.link;
    watch.textContent = project.linkLabel[language];
  }

  const video = document.getElementById('project-video');
  video.replaceChildren();
  video.hidden = !project.videoPreview;
  if (project.videoPreview) {
    const preview = document.createElement('a');
    preview.className = 'project-detail__video-link';
    preview.href = project.link;
    preview.target = '_blank';
    preview.rel = 'noreferrer';
    preview.setAttribute('aria-label', language === 'zh' ? `在 YouTube 观看 ${project.title}` : `Watch ${project.title} on YouTube`);

    const image = document.createElement('img');
    image.src = project.videoPreview;
    image.alt = `${project.title} video preview`;
    image.addEventListener('error', () => {
      image.src = project.videoPreviewFallback;
    }, { once: true });

    const label = document.createElement('span');
    label.textContent = language === 'zh' ? '在 YouTube 观看 ↗' : 'Watch on YouTube ↗';
    preview.append(image, label);
    video.append(preview);
  }

  const gallery = document.getElementById('project-gallery');
  const postTextGallery = document.getElementById('project-post-gallery');
  const galleryImages = project.galleryGroups ? project.galleryGroups.flat() : (project.images || []);
  gallery.className = `project-detail__gallery${project.galleryLayout ? ` project-detail__gallery--${project.galleryLayout}` : ''}`;
  gallery.replaceChildren();
  postTextGallery.className = `project-detail__post-gallery${project.galleryLayout ? ` project-detail__post-gallery--${project.galleryLayout}` : ''}`;
  postTextGallery.replaceChildren();

  const appendImages = (container, images, className, groupIndex) => {
    const composition = document.createElement('div');
    composition.className = className;
    images.forEach((src, imageIndex) => {
      const image = document.createElement('img');
      image.src = src;
      image.alt = `${project.title}, image ${groupIndex}-${imageIndex + 1}`;
      image.loading = 'lazy';
      composition.append(image);
    });
    container.append(composition);
  };

  if (project.galleryGroups) {
    project.galleryGroups.forEach((group, groupIndex) => {
      appendImages(gallery, group, `project-detail__composition project-detail__composition--${project.galleryLayout}-${groupIndex + 1}`, groupIndex + 1);
    });
  } else {
    galleryImages.forEach((src, imageIndex) => {
      const image = document.createElement('img');
      image.src = src;
      image.alt = `${project.title}, image ${imageIndex + 1}`;
      image.loading = 'lazy';
      gallery.append(image);
    });
  }
  gallery.hidden = !galleryImages.length;

  if (project.postTextGallery) {
    appendImages(postTextGallery, project.postTextGallery, `project-detail__composition project-detail__composition--${project.galleryLayout}-post`, (project.galleryGroups?.length || 0) + 1);
  }
  postTextGallery.hidden = !project.postTextGallery?.length;

  const previousLink = document.getElementById('project-previous');
  previousLink.href = `project.html?work=${keys[(current - 1 + keys.length) % keys.length]}`;
  previousLink.textContent = `← ${language === 'zh' ? previous.titleZh : previous.title}`;
  const nextLink = document.getElementById('project-next');
  nextLink.href = `project.html?work=${keys[(current + 1) % keys.length]}`;
  nextLink.textContent = `${language === 'zh' ? next.titleZh : next.title} →`;
}

function setLanguage(language, { remember = true } = {}) {
  const selectedLanguage = language === 'zh' ? 'zh' : 'en';
  if (remember) localStorage.setItem(languageStorageKey, selectedLanguage);

  document.documentElement.lang = selectedLanguage === 'zh' ? 'zh-CN' : 'en';
  document.title = selectedLanguage === 'zh' ? document.body.dataset.titleZh : document.body.dataset.titleEn;

  translatable.forEach((element) => {
    element.innerHTML = element.dataset[selectedLanguage];
  });

  languageButtons.forEach((button) => {
    const active = button.dataset.language === selectedLanguage;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  renderProjectDetail(selectedLanguage);
  renderFragments(selectedLanguage);
  scheduleHomeHeroShift();
  scheduleCallingTitleAlignment();
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.language));
});

const fragmentImages = [
  { src: 'assets/fragments/2026-09-01.jpg', month: '2026-09', rhythm: 13 },
  { src: 'assets/fragments/2026-09-02.jpg', month: '2026-09', rhythm: 14 },
  { src: 'assets/fragments/2026-09-03.jpg', month: '2026-09', rhythm: 15 },
  { src: 'assets/fragments/2026-09-04.jpg', month: '2026-09', rhythm: 16 },
  { src: 'assets/fragments/2026-09-05.jpg', month: '2026-09', rhythm: 17 },
  { src: 'assets/fragments/2026-09-06.jpg', month: '2026-09', rhythm: 18 },
  { src: 'assets/fragments/2026-09-16.jpg', month: '2026-09', rhythm: 28 },
  { src: 'assets/fragments/2026-09-08.jpg', month: '2026-09', rhythm: 20 },
  { src: 'assets/fragments/2026-09-09.jpg', month: '2026-09', rhythm: 21 },
  { src: 'assets/fragments/2026-09-10.jpg', month: '2026-09', rhythm: 22 },
  { src: 'assets/fragments/2026-09-07.jpg', month: '2026-09', rhythm: 19 },
  { src: 'assets/fragments/2026-09-13.jpg', month: '2026-09', rhythm: 25 },
  { src: 'assets/fragments/2026-09-11.jpg', month: '2026-09', rhythm: 23 },
  { src: 'assets/fragments/2026-09-12.jpg', month: '2026-09', rhythm: 24 },
  { src: 'assets/fragments/2026-09-14.jpg', month: '2026-09', rhythm: 26 },
  { src: 'assets/fragments/2026-09-15.jpg', month: '2026-09', rhythm: 27 },
  { src: 'assets/fragments/2026-09-17.jpg', month: '2026-09', rhythm: 29, archiveLayout: 'new-row' },
  { src: 'assets/fragments/2026-09-18.jpg', month: '2026-09', rhythm: 30, archiveLayout: 'new-row' },
  { src: 'assets/fragments/2026-08-01.jpg', month: '2026-08', rhythm: 1 },
  { src: 'assets/fragments/2025-10-01.jpg', month: '2025-10', rhythm: 2 },
  { src: 'assets/fragments/2025-06-02.jpg', month: '2025-06', rhythm: 4 },
  { src: 'assets/fragments/2026-08-03.jpg', month: '2026-08', rhythm: 5 },
  { src: 'assets/fragments/2026-05-01.jpg', month: '2026-05', rhythm: 6 },
  { src: 'assets/fragments/2025-06-03.jpg', month: '2025-06', rhythm: 7 },
  { src: 'assets/fragments/2026-08-02.jpg', month: '2026-08', rhythm: 8 },
  { src: 'assets/fragments/2026-05-04.jpg', month: '2026-05', rhythm: 9 },
  { src: 'assets/fragments/2025-06-01.jpg', month: '2025-06', rhythm: 10 },
  { src: 'assets/fragments/2026-08-04.jpg', month: '2026-08', rhythm: 11 },
  { src: 'assets/fragments/2026-09-19.jpg', month: '2026-08', rhythm: 31, archiveGroup: 'august-france-pair' },
  { src: 'assets/fragments/2026-09-20.jpg', month: '2026-08', rhythm: 32, archiveGroup: 'august-france-pair' },
  { src: 'assets/fragments/2026-05-02.jpg', month: '2026-05', rhythm: 12 }
];

const fragmentMonths = [
  { key: '2026-09', en: 'September 2026', zh: '2026 年 9 月' },
  { key: '2026-08', en: 'August 2026', zh: '2026 年 8 月' },
  { key: '2026-05', en: 'May 2026', zh: '2026 年 5 月' },
  { key: '2025-10', en: 'October 2025', zh: '2025 年 10 月' },
  { key: '2025-06', en: 'June 2025', zh: '2025 年 6 月' }
];

// Mirrors the By Date layout: left to right within each month, then newest month to oldest.
const fragmentArchiveImages = fragmentMonths.flatMap((month) => (
  fragmentImages.filter((item) => item.month === month.key)
));

function fragmentImage(src, alt) {
  const image = document.createElement('img');
  image.src = src;
  image.alt = alt;
  image.loading = 'lazy';
  return image;
}

function fragmentId(item) {
  return `fragment-${item.src.split('/').pop().replace(/\.[^.]+$/, '')}`;
}

let fragmentLightbox;
let fragmentLightboxImage;
let fragmentLightboxPrevious;
let fragmentLightboxNext;
let fragmentLightboxClose;
let fragmentLightboxIndex = 0;
let fragmentLightboxLastFocused;

function updateFragmentLightbox(language) {
  if (!fragmentLightbox) return;
  const isChinese = language === 'zh';
  fragmentLightbox.setAttribute('aria-label', isChinese ? '片段图片浏览' : 'Fragment image viewer');
  fragmentLightboxPrevious.setAttribute('aria-label', isChinese ? '上一张图片' : 'Previous image');
  fragmentLightboxNext.setAttribute('aria-label', isChinese ? '下一张图片' : 'Next image');
  fragmentLightboxClose.setAttribute('aria-label', isChinese ? '关闭图片浏览' : 'Close image viewer');
  fragmentLightboxClose.textContent = isChinese ? '关闭' : 'Close';
}

function showFragmentLightbox(index) {
  if (!fragmentLightbox) return;
  fragmentLightboxIndex = (index + fragmentArchiveImages.length) % fragmentArchiveImages.length;
  const item = fragmentArchiveImages[fragmentLightboxIndex];
  const language = document.documentElement.lang === 'zh-CN' ? 'zh' : 'en';
  fragmentLightboxImage.src = item.src;
  fragmentLightboxImage.alt = `${language === 'zh' ? '片段' : 'Fragment'} ${fragmentLightboxIndex + 1}`;
  fragmentLightbox.hidden = false;
  document.body.classList.add('has-fragment-lightbox');
  requestAnimationFrame(() => fragmentLightboxClose.focus());
}

function hideFragmentLightbox() {
  if (!fragmentLightbox || fragmentLightbox.hidden) return;
  fragmentLightbox.hidden = true;
  document.body.classList.remove('has-fragment-lightbox');
  fragmentLightboxImage.removeAttribute('src');
  fragmentLightboxLastFocused?.focus();
}

function initializeFragmentLightbox(language) {
  if (!fragmentLightbox) {
    fragmentLightbox = document.createElement('section');
    fragmentLightbox.className = 'fragment-lightbox';
    fragmentLightbox.hidden = true;
    fragmentLightbox.setAttribute('role', 'dialog');
    fragmentLightbox.setAttribute('aria-modal', 'true');

    const imageWrap = document.createElement('div');
    imageWrap.className = 'fragment-lightbox__image-wrap';
    fragmentLightboxImage = document.createElement('img');
    fragmentLightboxImage.className = 'fragment-lightbox__image';
    imageWrap.append(fragmentLightboxImage);

    fragmentLightboxPrevious = document.createElement('button');
    fragmentLightboxPrevious.className = 'fragment-lightbox__control fragment-lightbox__control--previous';
    fragmentLightboxPrevious.type = 'button';
    fragmentLightboxPrevious.textContent = '←';
    fragmentLightboxPrevious.addEventListener('click', () => showFragmentLightbox(fragmentLightboxIndex - 1));

    fragmentLightboxNext = document.createElement('button');
    fragmentLightboxNext.className = 'fragment-lightbox__control fragment-lightbox__control--next';
    fragmentLightboxNext.type = 'button';
    fragmentLightboxNext.textContent = '→';
    fragmentLightboxNext.addEventListener('click', () => showFragmentLightbox(fragmentLightboxIndex + 1));

    fragmentLightboxClose = document.createElement('button');
    fragmentLightboxClose.className = 'fragment-lightbox__close';
    fragmentLightboxClose.type = 'button';
    fragmentLightboxClose.addEventListener('click', hideFragmentLightbox);

    fragmentLightbox.append(imageWrap, fragmentLightboxPrevious, fragmentLightboxNext, fragmentLightboxClose);
    fragmentLightbox.addEventListener('click', (event) => {
      if (event.target === fragmentLightbox) hideFragmentLightbox();
    });
    document.body.append(fragmentLightbox);

    document.addEventListener('keydown', (event) => {
      if (!fragmentLightbox || fragmentLightbox.hidden) return;
      if (event.key === 'ArrowLeft') showFragmentLightbox(fragmentLightboxIndex - 1);
      if (event.key === 'ArrowRight') showFragmentLightbox(fragmentLightboxIndex + 1);
      if (event.key === 'Escape') hideFragmentLightbox();
    });
  }

  updateFragmentLightbox(language);
}

function renderFragments(language = document.documentElement.lang === 'zh-CN' ? 'zh' : 'en') {
  const root = document.getElementById('fragments-page');
  if (!root) return;

  const rhythm = document.getElementById('fragments-rhythm');
  const archive = document.getElementById('fragments-archive');

  if (rhythm) {
    rhythm.replaceChildren();
    fragmentImages.forEach((item, index) => {
      const figure = document.createElement('figure');
      figure.className = `fragments-rhythm__item fragments-rhythm__item--${item.rhythm}`;
      const link = document.createElement('a');
      link.className = 'fragments-rhythm__link';
      link.href = `fragments-by-date.html#${fragmentId(item)}`;
      link.setAttribute('aria-label', language === 'zh' ? `在按日期页面查看片段 ${index + 1}` : `View fragment ${index + 1} by date`);
      link.append(fragmentImage(item.src, `${language === 'zh' ? '片段' : 'Fragment'}, ${index + 1}`));
      figure.append(link);
      rhythm.append(figure);
    });
  }

  if (archive) {
    initializeFragmentLightbox(language);
    archive.replaceChildren();
    fragmentMonths.forEach((month) => {
      const section = document.createElement('section');
      section.className = 'fragments-archive__group';
      const heading = document.createElement('h2');
      heading.className = 'fragments-archive__date';
      heading.textContent = month[language];
      const grid = document.createElement('div');
      grid.className = 'fragments-archive__grid';
      const archiveGroups = new Map();
      fragmentImages.filter((item) => item.month === month.key).forEach((item, index) => {
        let container = grid;
        if (item.archiveGroup) {
          container = archiveGroups.get(item.archiveGroup);
          if (!container) {
            container = document.createElement('div');
            container.className = 'fragments-archive__pair';
            container.dataset.archiveGroup = item.archiveGroup;
            archiveGroups.set(item.archiveGroup, container);
            grid.append(container);
          }
        }
        const figure = document.createElement('figure');
        figure.className = `fragments-archive__item${item.archiveLayout ? ` fragments-archive__item--${item.archiveLayout}` : ''}`;
        figure.id = fragmentId(item);
        const button = document.createElement('button');
        button.className = 'fragments-archive__button';
        button.type = 'button';
        button.setAttribute('aria-label', language === 'zh' ? `放大查看片段 ${index + 1}` : `Enlarge fragment ${index + 1}`);
        button.addEventListener('click', () => {
          fragmentLightboxLastFocused = button;
          showFragmentLightbox(fragmentArchiveImages.indexOf(item));
        });
        button.append(fragmentImage(item.src, `${month[language]}, ${index + 1}`));
        figure.append(button);
        container.append(figure);
      });
      section.append(heading, grid);
      archive.append(section);
    });

    if (window.location.hash) {
      const target = document.getElementById(window.location.hash.slice(1));
      if (target) requestAnimationFrame(() => target.scrollIntoView({ block: 'center' }));
    }
  }
}

const carouselFragmentImages = [
  'assets/fragments/2026-08-03.jpg',
  'assets/fragments/2025-06-01.jpg',
  'assets/fragments/2026-05-04.jpg',
  'assets/fragments/2025-10-01.jpg',
  'assets/fragments/2026-08-02.jpg',
  'assets/fragments/2025-06-03.jpg',
  'assets/fragments/2026-05-01.jpg',
  'assets/fragments/2026-09-01.jpg',
  'assets/fragments/2026-09-02.jpg',
  'assets/fragments/2026-09-03.jpg',
  'assets/fragments/2026-09-04.jpg',
  'assets/fragments/2026-09-05.jpg',
  'assets/fragments/2026-09-06.jpg',
  'assets/fragments/2026-09-07.jpg',
  'assets/fragments/2026-09-08.jpg',
  'assets/fragments/2026-09-09.jpg',
  'assets/fragments/2026-09-10.jpg',
  'assets/fragments/2026-09-11.jpg',
  'assets/fragments/2026-09-12.jpg',
  'assets/fragments/2026-09-13.jpg',
  'assets/fragments/2026-09-14.jpg',
  'assets/fragments/2026-09-15.jpg',
  'assets/fragments/2026-09-16.jpg',
  'assets/fragments/2026-09-17.jpg',
  'assets/fragments/2026-09-18.jpg',
  'assets/fragments/2026-09-19.jpg',
  'assets/fragments/2026-09-20.jpg'
];

function initializeFragmentsCarousel() {
  const page = document.getElementById('fragments-carousel-page');
  const track = document.getElementById('fragments-carousel-track');
  if (!page || !track || track.dataset.initialized) return;
  track.dataset.initialized = 'true';

  for (let sequence = 0; sequence < 3; sequence += 1) {
    carouselFragmentImages.forEach((src, index) => {
      const item = document.createElement('figure');
      item.className = 'fragments-carousel__item';
      item.dataset.fragmentIndex = String(index);
      item.dataset.sequenceIndex = String(sequence * carouselFragmentImages.length + index);
      const image = fragmentImage(src, `Fragment ${index + 1}`);
      image.loading = 'eager';
      item.append(image);
      track.append(item);
    });
  }

  const viewport = track.parentElement;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const sequenceLength = carouselFragmentImages.length;
  // Keep the original carousel's landing image and sequence position; new work follows it.
  const centerOffset = Math.min(3, sequenceLength - 1);
  const resetAt = sequenceLength * 2 + centerOffset;
  let visualIndex = sequenceLength + centerOffset;
  let movementInProgress = false;
  let movementTimer;
  let autoAdvanceTimer;

  const activeItemIsHovered = () => Boolean(track.querySelector('.fragments-carousel__item.is-current:hover'));

  const scheduleAutoAdvance = () => {
    clearTimeout(autoAdvanceTimer);
    if (prefersReducedMotion || movementInProgress || activeItemIsHovered()) return;
    autoAdvanceTimer = window.setTimeout(() => moveToIndex(visualIndex + 1), 1500);
  };

  const setVisualIndex = (index, instant = false) => {
    const items = [...track.children];
    const activeItem = items[index];
    if (!activeItem) return;
    visualIndex = index;
    track.dataset.activeIndex = activeItem.dataset.fragmentIndex;
    items.forEach((item) => item.classList.toggle('is-current', item === activeItem));
    track.classList.toggle('is-resetting', instant);
    const offset = viewport.clientWidth / 2 - (activeItem.offsetLeft + activeItem.offsetWidth / 2);
    track.style.transform = `translate3d(${offset}px, 0, 0)`;
    if (instant) {
      void track.offsetWidth;
      requestAnimationFrame(() => requestAnimationFrame(() => track.classList.remove('is-resetting')));
    }
  };

  const finishMovement = () => {
    if (!movementInProgress) return;
    movementInProgress = false;
    clearTimeout(movementTimer);
    if (visualIndex >= resetAt) {
      setVisualIndex(visualIndex - sequenceLength, true);
    }
    scheduleAutoAdvance();
  };

  const moveToIndex = (index) => {
    if (movementInProgress || index === visualIndex) return;
    movementInProgress = true;
    setVisualIndex(index);

    const onTrackTransitionEnd = (event) => {
      if (event.target !== track || event.propertyName !== 'transform') return;
      track.removeEventListener('transitionend', onTrackTransitionEnd);
      finishMovement();
    };
    track.addEventListener('transitionend', onTrackTransitionEnd);
    movementTimer = setTimeout(finishMovement, 900);
  };

  const centerHoveredItem = (item) => {
    if (movementInProgress || item.classList.contains('is-current')) return;
    const sourceIndex = Number(item.dataset.fragmentIndex);
    const candidateIndexes = [...track.children]
      .map((entry, index) => ({ entry, index }))
      .filter(({ entry }) => Number(entry.dataset.fragmentIndex) === sourceIndex)
      .map(({ index }) => index);
    const closestIndex = candidateIndexes.reduce((closest, index) => (
      Math.abs(index - visualIndex) < Math.abs(closest - visualIndex) ? index : closest
    ));
    moveToIndex(closestIndex);
  };

  track.addEventListener('pointerover', (event) => {
    const item = event.target.closest('.fragments-carousel__item');
    if (!item || !track.contains(item)) return;
    const relatedItem = event.relatedTarget?.closest?.('.fragments-carousel__item');
    if (relatedItem === item) return;
    clearTimeout(autoAdvanceTimer);
    centerHoveredItem(item);
  });

  track.addEventListener('pointerout', (event) => {
    const item = event.target.closest('.fragments-carousel__item');
    if (!item || !track.contains(item)) return;
    const relatedItem = event.relatedTarget?.closest?.('.fragments-carousel__item');
    if (relatedItem === item) return;
    requestAnimationFrame(scheduleAutoAdvance);
  });

  track.addEventListener('click', (event) => {
    const item = event.target.closest('.fragments-carousel__item');
    if (!item || !item.classList.contains('is-current')) return;
    const fragment = fragmentImages.find(({ src }) => src === carouselFragmentImages[Number(item.dataset.fragmentIndex)]);
    if (!fragment) return;
    window.location.href = `fragments-by-date.html#${fragmentId(fragment)}`;
  });

  const imagesLoaded = [...track.querySelectorAll('img')];
  imagesLoaded.forEach((image) => image.addEventListener('load', () => {
    if (!movementInProgress) setVisualIndex(visualIndex, true);
  }, { once: true }));
  requestAnimationFrame(() => {
    setVisualIndex(visualIndex, true);
    scheduleAutoAdvance();
  });
  window.addEventListener('resize', () => {
    setVisualIndex(visualIndex, true);
    scheduleAutoAdvance();
  });
}

setLanguage(localStorage.getItem(languageStorageKey) === 'zh' ? 'zh' : 'en', { remember: false });
initializeFragmentsCarousel();

window.addEventListener('resize', () => {
  syncHomeHeroShift();
  syncCallingTitleAlignment();
});
document.fonts?.ready.then(() => {
  syncHomeHeroShift();
  syncCallingTitleAlignment();
});
