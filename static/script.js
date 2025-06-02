// 多语言翻译
const translations = {
    en: {
      mainTitle: "SmartReader AI",
      uiLangLabel: "Choose page language:",
      inputTitle: "Input",
      roleLabel: "Select your role:",
      goalLabel: "Select your goal:",
      outputLangLabel: "Select output language:",
      pasteLabel: "Paste your article text or URL link:",
      uploadLabel: "Or upload your file:",
      generateBtn: "Generate Summary",
      outputTitle: "Output",
      summaryTitle: "Summary in Bullet Points",
      takeawayTitle: "Key Takeaways",
      questionTitle: "Smart Questions to Ask",
      downloadBtn: "Download as Text File",
      feedbackTitle: "Feedback to Improve",
      feedbackLabel: "What function would make you more willing to pay?",
      paymentLabel: "Do you want to pay for this? How much would you pay monthly?",
      roleStudent: "Student",
      roleTeacher: "Teacher", 
      roleSales: "Sales",
      roleCustomer: "Customer",
      roleProductManager: "Product Manager",
      roleAnalyst: "Analyst",
      roleSupervisor: "Supervisor",
      roleReader: "Reader",
      roleConsultant: "Consultant",
      roleDeveloper: "Developer",
      roleMarketer: "Marketer",
      goalUnderstand: "Understand the key ideas",
      goalExplain: "Be able to explain it to others",
      goalApply: "Apply it to my work",
      goalArgue: "Critically challenge or argue with it",
      outputEnglish: "English",
      outputChinese: "Chinese",
      outputSpanish: "Spanish",
      uploadText: "Click to upload or drag & drop your file here",
      supportedFormats: "Supported formats: TXT, PDF, DOC, DOCX",
      textPlaceholder: "Paste your text content or URL here...",
      feedbackPlaceholder: "Share your feedback here...",
      urlLabel: "Or paste a URL to analyze:",
      urlPlaceholder: "https://example.com/article",
      fetchBtn: "Analyze URL",
      fetchingBtn: "Analyzing...",
      analysisTitle: "Analysis Results",
      submitBtn: "Submit Feedback"
    },
    zh: {
      mainTitle: "智能摘要助手",
      uiLangLabel: "选择页面语言：",
      inputTitle: "输入",
      roleLabel: "选择你的身份：",
      goalLabel: "选择你的目标：",
      outputLangLabel: "选择输出语言：",
      pasteLabel: "粘贴你的文章内容或网页链接：",
      uploadLabel: "或上传你的文件：",
      generateBtn: "生成摘要",
      outputTitle: "输出",
      summaryTitle: "文章要点总结",
      takeawayTitle: "核心收获",
      questionTitle: "可深究的问题",
      downloadBtn: "下载为文本文件",
      feedbackTitle: "改进建议",
      feedbackLabel: "你希望我们增加什么功能？",
      paymentLabel: "你愿意为此付费吗？你每月愿意支付多少？",
      roleStudent: "学生",
      roleTeacher: "教师", 
      roleSales: "销售",
      roleCustomer: "客户",
      roleProductManager: "产品经理",
      roleAnalyst: "分析师",
      roleSupervisor: "主管",
      roleReader: "读者",
      roleConsultant: "顾问",
      roleDeveloper: "开发者",
      roleMarketer: "营销人员",
      goalUnderstand: "理解关键概念",
      goalExplain: "能够向他人解释",
      goalApply: "应用到我的工作中",
      goalArgue: "批判性分析或质疑",
      outputEnglish: "英语",
      outputChinese: "中文", 
      outputSpanish: "西班牙语",
      uploadText: "点击上传或拖拽文件到此处",
      supportedFormats: "支持格式：TXT, PDF, DOC, DOCX",
      textPlaceholder: "在此粘贴文本内容或URL链接...",
      feedbackPlaceholder: "在此分享你的反馈...",
      urlLabel: "或粘贴链接进行分析：",
      urlPlaceholder: "https://example.com/文章",
      fetchBtn: "分析链接",
      fetchingBtn: "分析中...",
      analysisTitle: "分析结果",
      submitBtn: "提交反馈"
    },
    es: {
      mainTitle: "Asistente de Lectura AI",
      uiLangLabel: "Selecciona el idioma de la página:",
      inputTitle: "Entrada",
      roleLabel: "Selecciona tu rol:",
      goalLabel: "Selecciona tu objetivo:",
      outputLangLabel: "Selecciona el idioma de salida:",
      pasteLabel: "Pega el texto de tu artículo o el enlace URL",
      uploadLabel: "O sube tu archivo:",
      generateBtn: "Generar Resumen",
      outputTitle: "Salida",
      summaryTitle: "Resumen en Viñetas",
      takeawayTitle: "Conclusiones Clave",
      questionTitle: "Preguntas Inteligentes para Hacer",
      downloadBtn: "Descargar como Archivo de Texto",
      feedbackTitle: "Sugerencias de Mejora",
      feedbackLabel: "¿Qué función te gustaría que agregáramos?",
      paymentLabel: "¿Te gustaría pagar por esto? ¿Cuánto pagarías al mes?",
      roleStudent: "Estudiante",
      roleTeacher: "Profesor", 
      roleSales: "Ventas",
      roleCustomer: "Cliente",
      roleProductManager: "Gerente de Producto",
      roleAnalyst: "Analista",
      roleSupervisor: "Supervisor",
      roleReader: "Lector",
      roleConsultant: "Consultor",
      roleDeveloper: "Desarrollador",
      roleMarketer: "Especialista en Marketing",
      goalUnderstand: "Entender las ideas clave",
      goalExplain: "Poder explicárselo a otros",
      goalApply: "Aplicarlo a mi trabajo",
      goalArgue: "Analizar críticamente o cuestionar",
      outputEnglish: "Inglés",
      outputChinese: "Chino",
      outputSpanish: "Español",
      uploadText: "Haz clic para subir o arrastra tu archivo aquí",
      supportedFormats: "Formatos soportados: TXT, PDF, DOC, DOCX",
      textPlaceholder: "Pega tu contenido de texto o URL aquí...",
      feedbackPlaceholder: "Comparte tus comentarios aquí...",
      urlLabel: "O pega una URL para analizar:",
      urlPlaceholder: "https://example.com/articulo",
      fetchBtn: "Analizar URL",
      fetchingBtn: "Analizando...",
      analysisTitle: "Resultados de la Análisis",
      submitBtn: "Enviar Comentario"
    }
};

// 全局变量
let currentOutput = null;

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
  initializeFileUpload();
  initializeDragAndDrop();
  initializeEventListeners();
});

// 初始化事件监听器
function initializeEventListeners() {
  const textArea = document.getElementById('text');
  
  // 当用户在文本框输入时，清除文件状态
  if (textArea) {
    textArea.addEventListener('input', function() {
      const fileContent = textArea.getAttribute('data-file-content');
      if (fileContent && textArea.value.trim()) {
        // 如果有文件内容且用户开始输入，清除文件状态
        clearFileUpload();
      }
    });
  }
}

// 更新界面语言
function updateInterfaceLanguage() {
  const lang = document.getElementById('uiLanguage').value;
  const t = translations[lang];
  
  if (!t) return;
  
  // 更新文本内容
  for (const key in t) {
    const el = document.getElementById(key);
    if (el) {
      if (el.tagName === 'INPUT' && el.type === 'submit') {
        el.value = t[key];
      } else {
        el.textContent = t[key];
      }
    }
  }
  
  // 翻译角色选项
  const roleOptions = ['roleStudent', 'roleTeacher', 'roleSales', 'roleCustomer', 'roleProductManager', 'roleAnalyst', 'roleSupervisor', 'roleReader', 'roleConsultant', 'roleDeveloper', 'roleMarketer'];
  roleOptions.forEach(option => {
    const el = document.getElementById(option);
    if (el && t[option]) el.textContent = t[option];
  });
  
  // 翻译目标选项
  const goalOptions = ['goalUnderstand', 'goalExplain', 'goalApply', 'goalArgue'];
  goalOptions.forEach(option => {
    const el = document.getElementById(option);
    if (el && t[option]) el.textContent = t[option];
  });

  // 翻译输出语言选项
  const outputOptions = ['outputEnglish', 'outputChinese', 'outputSpanish'];
  outputOptions.forEach(option => {
    const el = document.getElementById(option);
    if (el && t[option]) el.textContent = t[option];
  });

  // 翻译上传区域
  const uploadEl = document.getElementById('uploadText');
  if (uploadEl && t.uploadText) uploadEl.textContent = t.uploadText;

  const formatsEl = document.getElementById('supportedFormats');
  if (formatsEl && t.supportedFormats) formatsEl.textContent = t.supportedFormats;

  // 翻译placeholder
  const textArea = document.getElementById('text');
  if (textArea && t.textPlaceholder) textArea.placeholder = t.textPlaceholder;

  const feedbackArea = document.getElementById('userFeedback');
  if (feedbackArea && t.feedbackPlaceholder) feedbackArea.placeholder = t.feedbackPlaceholder;

  // 翻译URL输入相关元素
  const urlInput = document.getElementById('urlInput');
  if (urlInput && t.urlPlaceholder) urlInput.placeholder = t.urlPlaceholder;

  const analyzeBtnText = document.getElementById('analyzeUrlBtnText');
  if (analyzeBtnText && t.fetchBtn) analyzeBtnText.textContent = t.fetchBtn;
}

// 初始化文件上传
function initializeFileUpload() {
  const fileInput = document.getElementById('fileUpload');
  if (fileInput) {
    fileInput.addEventListener('change', handleFileSelect);
  }
}

// 初始化拖拽上传
function initializeDragAndDrop() {
  const uploadArea = document.getElementById('fileUploadArea');
  
  if (!uploadArea) return;
  
  uploadArea.addEventListener('dragover', function(e) {
    e.preventDefault();
    uploadArea.style.borderColor = '#5a67d8';
    uploadArea.style.backgroundColor = '#f0f4ff';
  });
  
  uploadArea.addEventListener('dragleave', function(e) {
    e.preventDefault();
    uploadArea.style.borderColor = '#667eea';
    uploadArea.style.backgroundColor = '#f8f9ff';
  });
  
  uploadArea.addEventListener('drop', function(e) {
    e.preventDefault();
    uploadArea.style.borderColor = '#667eea';
    uploadArea.style.backgroundColor = '#f8f9ff';
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFile(files[0]);
    }
  });
}

// 处理文件选择
function handleFileSelect(event) {
  const file = event.target.files[0];
  if (file) {
    handleFile(file);
  }
}

// 处理文件内容
function handleFile(file) {
  const fileName = file.name.toLowerCase();
  
  if (fileName.endsWith('.pdf') || fileName.endsWith('.doc') || fileName.endsWith('.docx')) {
    // 对于PDF和Word文件，直接上传到后端处理
    uploadFileToBackend(file);
  } else if (fileName.endsWith('.txt') || fileName.endsWith('.md')) {
    // 对于文本文件，在前端读取
    const reader = new FileReader();
    reader.onload = function(e) {
      const content = e.target.result;
      document.getElementById('text').value = content;
      showMessage('File loaded successfully!', 'success');
    };
    reader.onerror = function() {
      showMessage('Error reading file. Please try again.', 'error');
    };
    reader.readAsText(file);
  } else {
    showMessage('Unsupported file type. Please use TXT, PDF, DOC, or DOCX files.', 'error');
  }
}

// 上传文件到后端处理
async function uploadFileToBackend(file) {
  const formData = new FormData();
  formData.append('file', file);
  
  try {
    showMessage('Uploading file...', 'success');
    
    const response = await fetch('/api/process-file', {
      method: 'POST',
      body: formData
    });
    
    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error);
    }
    
    // 将提取的文本保存到隐藏数据中
    const textArea = document.getElementById('text');
    textArea.setAttribute('data-file-content', data.content);
    textArea.setAttribute('data-file-name', file.name);
    textArea.setAttribute('data-file-size', Math.round(file.size/1024));
    
    // 显示文件上传成功状态
    showFileUploadSuccess(file.name, Math.round(file.size/1024));
    
    // 清空文本框
    textArea.value = '';
    textArea.placeholder = 'File content loaded. Click "Generate Summary" to analyze.';
    
    showMessage('File uploaded successfully!', 'success');
    
  } catch (error) {
    console.error('Error:', error);
    showMessage('Error uploading file: ' + error.message, 'error');
  }
}

// 显示文件上传成功状态
function showFileUploadSuccess(fileName, fileSizeKB) {
  const uploadArea = document.getElementById('fileUploadArea');
  if (!uploadArea) return;
  
  // 隐藏原来的上传提示
  const uploadText = uploadArea.querySelector('#uploadText');
  const supportedFormats = uploadArea.querySelector('#supportedFormats');
  const fileInput = uploadArea.querySelector('#fileUpload');
  
  if (uploadText) uploadText.style.display = 'none';
  if (supportedFormats) supportedFormats.style.display = 'none';
  if (fileInput) fileInput.style.display = 'none';
  
  // 移除现有的成功状态（如果有）
  const existingSuccess = uploadArea.querySelector('.file-success-indicator');
  if (existingSuccess) {
    existingSuccess.remove();
  }
  
  // 创建成功状态显示
  const successIndicator = document.createElement('div');
  successIndicator.className = 'file-success-indicator';
  successIndicator.innerHTML = `
    <div style="
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      padding: 20px;
      text-align: center;
    ">
      <div style="
        display: flex;
        align-items: center;
        gap: 8px;
        background: #10b981;
        color: white;
        padding: 12px 16px;
        border-radius: 8px;
        margin-bottom: 10px;
        font-size: 14px;
        font-weight: 500;
      ">
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
          <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
          <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
        </svg>
        <span>✓ File uploaded successfully</span>
      </div>
      <div style="
        color: #374151;
        font-size: 13px;
        margin-bottom: 15px;
      ">
        <strong>${fileName}</strong> (${fileSizeKB}KB)
      </div>
      <button onclick="clearFileUpload()" style="
        background: #ef4444;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 6px;
        cursor: pointer;
        font-size: 12px;
        transition: background-color 0.2s;
      " onmouseover="this.style.backgroundColor='#dc2626'" onmouseout="this.style.backgroundColor='#ef4444'">
        Remove File
      </button>
    </div>
  `;
  
  uploadArea.appendChild(successIndicator);
}

// 清除文件上传状态
function clearFileUpload() {
  const textArea = document.getElementById('text');
  const uploadArea = document.getElementById('fileUploadArea');
  
  // 清除文件数据
  textArea.removeAttribute('data-file-content');
  textArea.removeAttribute('data-file-name');
  textArea.removeAttribute('data-file-size');
  
  // 恢复文本框
  const currentLang = document.getElementById('uiLanguage').value;
  textArea.placeholder = translations[currentLang].textPlaceholder;
  
  // 移除成功状态显示
  const successIndicator = uploadArea.querySelector('.file-success-indicator');
  if (successIndicator) {
    successIndicator.remove();
  }
  
  // 恢复原来的上传区域显示
  const uploadText = uploadArea.querySelector('#uploadText');
  const supportedFormats = uploadArea.querySelector('#supportedFormats');
  const fileInput = uploadArea.querySelector('#fileUpload');
  
  if (uploadText) uploadText.style.display = 'block';
  if (supportedFormats) supportedFormats.style.display = 'block';
  if (fileInput) fileInput.style.display = 'block';
  
  // 清空文件输入框的值，这样就不会显示原来的文件名
  if (fileInput) fileInput.value = '';
  
  showMessage('File cleared. You can now enter text manually or upload a new file.', 'success');
}

// 生成摘要
async function generateOutput() {
    const role = document.getElementById('role').value;
    const goal = document.getElementById('goal').value;
    const language = document.getElementById('language').value;
    const textArea = document.getElementById('text');
  
  // 检查是否有文件内容或文本输入
  let text = textArea.value.trim();
  const fileContent = textArea.getAttribute('data-file-content');
  
  if (fileContent) {
    // 使用文件内容
    text = fileContent;
  } else if (!text) {
    // 既没有文件也没有文本输入
    showMessage('Please enter some text or upload a file.', 'error');
    return;
  }
  
  // 显示加载状态
  const generateBtn = document.getElementById('generateBtn');
  
  if (!generateBtn) {
    showMessage('Generate button not found', 'error');
    return;
  }
  
  generateBtn.disabled = true;
  const currentLang = document.getElementById('uiLanguage').value;
  const loadingTexts = {
    'en': 'Analyzing...',
    'zh': '分析中...',
    'es': 'Analizando...'
  };
  
  const originalText = generateBtn.textContent;
  generateBtn.textContent = loadingTexts[currentLang] || 'Analyzing...';
  generateBtn.classList.add('generating');

  // 检查是否是URL（仅当使用文本输入时）
  const urlPattern = /^https?:\/\/.+/i;
  let finalText = text;
  
  if (!fileContent && urlPattern.test(text.trim())) {
    // 是URL，先获取内容
    try {
      const urlResponse = await fetch('/api/fetch-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: text.trim() })
      });
      
      const urlData = await urlResponse.json();
      if (urlData.error) {
        throw new Error(urlData.error);
      }
      
      finalText = urlData.content;
      showMessage('URL content fetched, analyzing...', 'success');
    } catch (error) {
      showMessage('Error fetching URL content: ' + error.message, 'error');
      // 恢复按钮状态
      generateBtn.disabled = false;
      generateBtn.textContent = originalText;
      generateBtn.classList.remove('generating');
      return;
    }
  }
  
  try {
    const response = await fetch('/api/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        role: role,
        goal: goal,
        language: language,
        text: finalText
      })
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error);
    }
    
    // 显示结果
    displayResults(data);
    currentOutput = data;
    
    const fileName = textArea.getAttribute('data-file-name');
    if (fileName) {
      showMessage(`Analysis completed for file: ${fileName}`, 'success');
    } else {
      showMessage('Analysis completed successfully!', 'success');
    }
    
  } catch (error) {
    console.error('Error:', error);
    showMessage('Error generating summary. Please try again.', 'error');
  } finally {
    // 恢复按钮状态
    generateBtn.disabled = false;
    const currentLang = document.getElementById('uiLanguage').value;
    if (translations[currentLang]) {
      generateBtn.textContent = translations[currentLang].generateBtn;
    } else {
      generateBtn.textContent = originalText;
    }
    generateBtn.classList.remove('generating');
  }
}

// 显示分析结果
function displayResults(data) {
  const formatText = (text) => {
    if (!text) return 'No content available';
    
    console.log('Processing text:', text); // 调试信息
    
    // 先移除所有markdown格式符号
    let formattedText = text
      .replace(/\*\*([^*]+)\*\*/g, '$1') // 移除加粗符号，只保留内容
      .replace(/\*([^*]+)\*/g, '$1')     // 移除斜体符号，只保留内容
      .replace(/###\s*/g, '')           // 移除三级标题符号
      .replace(/##\s*/g, '')            // 移除二级标题符号
      .replace(/#\s*/g, '');            // 移除一级标题符号
    
    // 按行分割并处理
    let lines = formattedText.split('\n').filter(line => line.trim());
    
    // 检查是否已经有编号格式
    let hasNumbering = lines.some(line => {
      const trimmedLine = line.trim();
      return /^\d+\.\s/.test(trimmedLine);
    });
    
    console.log('Has existing numbering:', hasNumbering); // 调试信息
    console.log('Sample lines for numbering check:', lines.slice(0, 3)); // 调试信息
    
    if (hasNumbering) {
      // 如果已经有编号，格式化显示并为标题添加加粗
      const formattedLines = lines.map(line => {
        const trimmedLine = line.trim();
        if (!trimmedLine) return '';
        
        // 查找冒号，对冒号前的部分加粗
        const colonIndex = trimmedLine.indexOf(':');
        if (colonIndex !== -1) {
          const beforeColon = trimmedLine.substring(0, colonIndex + 1);
          const afterColon = trimmedLine.substring(colonIndex + 1);
          
          // 提取编号和标题
          const numberMatch = beforeColon.match(/^(\d+\.\s*)(.*)/);
          if (numberMatch) {
            const number = numberMatch[1]; // "1. "
            const title = numberMatch[2];  // 标题部分
            return `<div style="margin: 15px 0; line-height: 1.6;">${number}<strong>${title}</strong>${afterColon}</div>`;
          } else {
            return `<div style="margin: 15px 0; line-height: 1.6;">${trimmedLine}</div>`;
          }
        } else {
          return `<div style="margin: 15px 0; line-height: 1.6;">${trimmedLine}</div>`;
        }
      });
      
      return formattedLines.join('');
    } else {
      // 如果没有编号格式，使用智能编号
      return addSmartNumbering(formattedText);
    }
  };
  
  // 智能编号格式化函数（仅在没有编号时使用）
  const addSmartNumbering = (text) => {
    if (!text) return 'No content available';
    
    console.log('Adding smart numbering to:', text); // 调试信息
    
    // 按段落分割
    const paragraphs = text.split(/\n\s*\n|\n/).filter(p => p.trim());
    
    let numberedContent = '';
    let currentNumber = 1;
    
    for (let i = 0; i < paragraphs.length; i++) {
      const paragraph = paragraphs[i].trim();
      if (!paragraph) continue;
      
      // 查找冒号，对冒号前的部分加粗
      const colonIndex = paragraph.indexOf(':');
      if (colonIndex !== -1) {
        const beforeColon = paragraph.substring(0, colonIndex + 1);
        const afterColon = paragraph.substring(colonIndex + 1);
        
        numberedContent += `<div style="margin: 15px 0; line-height: 1.6;">`;
        numberedContent += `${currentNumber}. <strong>${beforeColon}</strong>${afterColon}`;
        numberedContent += `</div>`;
      } else {
        numberedContent += `<div style="margin: 15px 0; line-height: 1.6;">`;
        numberedContent += `${currentNumber}. ${paragraph}`;
        numberedContent += `</div>`;
      }
      currentNumber++;
    }
    
    return numberedContent;
  };
  
  // 添加元素存在检查
  const summaryEl = document.getElementById('summary');
  const takeawaysEl = document.getElementById('takeaways');
  const questionsEl = document.getElementById('questions');
  
  if (summaryEl) {
    console.log('Raw summary data:', data.summary); // 调试用
    summaryEl.innerHTML = formatText(data.summary);
  }
  
  if (takeawaysEl) {
    console.log('Raw takeaways data:', data.takeaways); // 调试用
    takeawaysEl.innerHTML = formatText(data.takeaways);
  }
  
  if (questionsEl) {
    console.log('Raw questions data:', data.questions); // 调试用
    questionsEl.innerHTML = formatText(data.questions);
  }
  
  const outputSection = document.getElementById('output');
  if (outputSection) {
    outputSection.style.display = 'block';
    outputSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // 显示使用统计
  if (data.usage_info) {
    showUsageInfo(data.usage_info);
  }
}

// 添加新函数显示使用信息
function showUsageInfo(usageInfo) {
  const outputSection = document.getElementById('output');
  
  // 移除现有的使用信息
  const existingUsage = document.getElementById('usage-info');
  if (existingUsage) {
      existingUsage.remove();
  }
  
  // 计算全局使用率
  const globalUsagePercent = Math.round((usageInfo.global_used / usageInfo.global_limit) * 100);
  const userUsagePercent = Math.round((usageInfo.used_today / usageInfo.user_limit) * 100);
  
  // 创建使用信息显示
  const usageDiv = document.createElement('div');
  usageDiv.id = 'usage-info';
  usageDiv.style.cssText = `
      background: #f0f4ff;
      border: 1px solid #667eea;
      border-radius: 8px;
      padding: 15px;
      margin-top: 15px;
      font-size: 14px;
      color: #4c51bf;
  `;
  
  // 根据使用率改变颜色
  let globalColor = '#10b981'; // 绿色
  if (globalUsagePercent > 80) globalColor = '#f59e0b'; // 黄色
  if (globalUsagePercent > 95) globalColor = '#ef4444'; // 红色
  
  usageDiv.innerHTML = `
      <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
          <div>
              <strong>👤 您的使用:</strong> ${usageInfo.used_today}/${usageInfo.user_limit}次
              <span style="color: #6b7280;">(剩余 ${usageInfo.user_remaining} 次)</span>
          </div>
      </div>
      <div style="display: flex; justify-content: space-between; align-items: center;">
          <div>
              <strong>🌍 今日总用量:</strong> ${usageInfo.global_used}/${usageInfo.global_limit}次
              <span style="color: ${globalColor};">(${globalUsagePercent}%)</span>
          </div>
          <div style="background: #e5e7eb; border-radius: 10px; width: 100px; height: 8px; margin-left: 10px;">
              <div style="background: ${globalColor}; width: ${globalUsagePercent}%; height: 100%; border-radius: 10px; transition: width 0.3s;"></div>
          </div>
      </div>
      ${globalUsagePercent > 90 ? '<div style="margin-top: 8px; color: #f59e0b; font-size: 12px;">⚠️ 今日服务使用量即将达到上限</div>' : ''}
  `;
  
  outputSection.appendChild(usageDiv);
}
// 下载结果
function downloadResults() {
  if (!currentOutput) {
    showMessage('No results to download', 'error');
    return;
  }
  
  const lang = document.getElementById('uiLanguage').value;
  const t = translations[lang] || translations.en;
  
  const content = `${t.summaryTitle}
${currentOutput.summary || 'No summary available'}

${t.takeawayTitle}
${currentOutput.takeaways || 'No takeaways available'}

${t.questionTitle}
${currentOutput.questions || 'No questions available'}

Generated by SmartReader AI
Date: ${new Date().toLocaleDateString()}
`;
  
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = `smartreader-analysis-${new Date().toISOString().split('T')[0]}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  
  window.URL.revokeObjectURL(url);
  showMessage('File downloaded successfully!', 'success');
}

// 提交反馈 - 完全替换原来的 submitFeedback 函数
async function submitFeedback() {
  const feedback = document.getElementById('userFeedback').value;
  const payment = document.getElementById('payment').value;
  
  // 收集用户的当前设置
  const role = document.getElementById('role').value;
  const goal = document.getElementById('goal').value;
  const language = document.getElementById('language').value;
  
  if (!feedback.trim()) {
    showMessage('Please enter your feedback before submitting.', 'error');
    return;
  }
  
  // 显示提交状态
  const submitBtn = document.getElementById('submitBtn');
  const originalText = submitBtn.textContent;
  submitBtn.disabled = true;
  submitBtn.textContent = 'Submitting...';
  
  try {
    const response = await fetch('/api/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        feedback: feedback,
        payment: payment,
        role: role,
        goal: goal,
        language: language
      })
    });
    
    const data = await response.json();
    
    if (data.success) {
      showMessage('Thank you for your feedback! We really appreciate it.', 'success');
      
      // 清空表单
      document.getElementById('userFeedback').value = '';
      document.getElementById('payment').selectedIndex = 0;
      
    } else {
      throw new Error(data.error || 'Failed to submit feedback');
    }
    
  } catch (error) {
    console.error('Error:', error);
    showMessage('Error submitting feedback. Please try again.', 'error');
  } finally {
    // 恢复按钮状态
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
  }
}

// 显示消息
function showMessage(message, type, actionButton = null) {
  // 移除现有消息
  const existingMessage = document.querySelector('.message');
  if (existingMessage) {
    existingMessage.remove();
  }
  
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${type}`;
  
  // 错误信息
  const textDiv = document.createElement('div');
  textDiv.textContent = message;
  messageDiv.appendChild(textDiv);
  
  // 如果有操作按钮，添加按钮
  if (actionButton) {
    const buttonDiv = document.createElement('div');
    buttonDiv.style.marginTop = '10px';
    
    const button = document.createElement('button');
    button.textContent = actionButton.text;
    button.style.cssText = 'background: #667eea; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; font-size: 14px;';
    button.onclick = actionButton.action;
    
    buttonDiv.appendChild(button);
    messageDiv.appendChild(buttonDiv);
  }
  
  const container = document.querySelector('.container');
  if (container) {
    container.insertBefore(messageDiv, container.firstChild);
  }
  
  // 错误信息显示时间更长
  const autoRemoveTime = type === 'error' ? 8000 : 3000;
  setTimeout(() => {
    if (messageDiv.parentNode) {
      messageDiv.remove();
    }
  }, autoRemoveTime);
}

// 获取URL内容并填入文本框
async function analyzeUrl() {
  const urlInput = document.getElementById('urlInput');
  const analyzeBtn = document.getElementById('analyzeUrlBtn');
  const analyzeBtnText = document.getElementById('analyzeUrlBtnText');
  const textArea = document.getElementById('text');
  
  if (!urlInput || !analyzeBtn || !textArea) {
    showMessage('Required elements not found', 'error');
    return;
  }
  
  const url = urlInput.value.trim();
  if (!url) {
    showMessage('Please enter a URL', 'error');
    return;
  }
  
  // 显示加载状态
  analyzeBtn.disabled = true;
  const currentLang = document.getElementById('uiLanguage').value;
  const loadingTexts = {
    'en': 'Fetching...',
    'zh': '获取中...',
    'es': 'Obteniendo...'
  };
  
  const originalText = analyzeBtnText ? analyzeBtnText.textContent : analyzeBtn.textContent;
  if (analyzeBtnText) {
    analyzeBtnText.textContent = loadingTexts[currentLang] || 'Fetching...';
  } else {
    analyzeBtn.textContent = loadingTexts[currentLang] || 'Fetching...';
  }
  analyzeBtn.classList.add('generating');
  
  try {
    const response = await fetch('/api/fetch-url', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: url })
    });
    
    const data = await response.json();
    
    if (data.error) {
      throw new Error(data.error);
    }
    
    // 将内容填入文本框
    textArea.value = data.content;
    textArea.style.display = 'block'; // 确保文本框可见
    showMessage('Content fetched! Now click "Generate Summary" to analyze.', 'success');
    
  } catch (error) {
    console.error('Error:', error);
    showMessage('Error fetching URL. Please try again.', 'error');
  } finally {
    // 恢复按钮状态
    analyzeBtn.disabled = false;
    const currentLang = document.getElementById('uiLanguage').value;
    if (analyzeBtnText && translations[currentLang]) {
      analyzeBtnText.textContent = translations[currentLang].fetchBtn;
    } else {
      if (analyzeBtnText) {
        analyzeBtnText.textContent = originalText;
      } else {
        analyzeBtn.textContent = originalText;
      }
    }
    analyzeBtn.classList.remove('generating');
  }
}