import "./clog.less";

import cLog from 'c-log-kit';

cLog.hello();

const CLogPage = () => {

  return (
    <div className="clog-page">
      <header className="header">
        <div className="jsLogo">js</div>
        <div className="title">
          <div>console</div>
          <small>cheat sheet</small>
        </div>
      </header>

      <main className="grid">
        <article className="transparent grid-item">
          <table className="infoTable">
            <caption >Console API 方法概述</caption>
            <thead>
              <tr>
                <th>方法名</th>
                <th>描述</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>console.info()</td>
                <td>向控制台输出一个具体信息, 开头会显示一个 `i` 的小图标。</td>
              </tr>
              <tr>
                <td>console.log()</td>
                <td>在没有图标的情况下输出一条消息。</td>
              </tr>
              <tr>
                <td>console.dir()</td>
                <td>在控制台中显示指定 JavaScript 对象的属性，并通过类似文件树样式的交互列表显示。</td>
              </tr>
              <tr>
                <td>console.debug()</td>
                <td>输出调试级别的消息且仅仅控制台配置为显示调试输出时才显示该消息。</td>
              </tr>
              <tr>
                <td>console.warn()</td>
                <td>向控制台输出一条警告信息。</td>
              </tr>
              <tr>
                <td>console.error()</td>
                <td>打印一条错误信息。</td>
              </tr>
              <tr>
                <td>console.assert()</td>
                <td>如果断言为 `false`，则将一个错误消息写入控制台；如果断言为 `true`, 则没有任何反应。</td>
              </tr>
              <tr>
                <td>console.count()</td>
                <td>输出 `count()` 被调用的次数。此函数接受一个可选参数 `label`(字符串)。如果有 `label` ，此函数输出为该 `label` 和 `count()` 被调用的次数。</td>
              </tr>
              <tr>
                <td className="group">console.group()</td>
                <td>对控制台输出的消息进行分组展示，创建一个新的分组, 后续所有打印内容将会以子层级的形式展示，直到调用 `groupEnd()`来闭合组。</td>
              </tr>
              <tr>
                <td className="group">console.groupCollapsed()</td>
                <td>和 `console.group()` 功能类似，不同的是，新建的分组默认是折叠的，用户必须点击一个按钮才能将折叠的内容打开。</td>
              </tr>
              <tr>
                <td className="group">console.groupEnd()</td>
                <td>退出当前内联组</td>
              </tr>
              <tr>
                <td>console.clear()</td>
                <td>清空控制台。</td>
              </tr>
              <tr>
                <td className="group">console.time()</td>
                <td>启动一个计时器来跟踪某一个操作的占用时长。每一个计时器必须拥有唯一的名字，页面中最多能同时运行 10,000 个计时器。当以此计时器名字为参数调用 `console.timeEnd()`时，浏览器将以毫秒为单位，输出对应计时器所经过的时间。</td>
              </tr>
              <tr>
                <td className="group">console.timeEnd()</td>
                <td>停止指定的定时器，并记录自其开始以来经过的时间（秒）。</td>
              </tr>
              <tr>
                <td>console.table()</td>
                <td>将数据以表格的形式显示。</td>
              </tr>
              <tr>
                <td className="group">console.profile()</td>
                <td>开始记录性能描述信息 。可以提供一个 `profileName` (字符串) 参数来命名描述信息，这将允许你在有多个描述信息被记录时来选择只停止那个描述信息（被你命名的那个）。</td>
              </tr>
              <tr>
                <td className="group">console.profileEnd()</td>
                <td>profileEnd 方法停止记录之前启动的配置文件</td>
              </tr>
              <tr>
                <td>console.trace()</td>
                <td>向控制台输出一个 `stack trace（堆栈跟踪）`。</td>
              </tr>
              <tr>
                <td>console.timeStamp()</td>
                <td>向浏览器的 Performance 或者 Waterfall 工具添加一个标记。这样可以让你将代码中的一个点和其他在时间轴上已记录的事件相关联，例如布局事件和绘制事件等。</td>
              </tr>
            </tbody>
          </table>
        </article>
        {/* <!-- Substitution string --> */}
        <article className="transparent grid-item">
          <table className="infoTable">
            <caption>使用字符串替换</caption>
            <thead>
              <tr>
                <th>替换字符</th>
                <th>描述</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>%o or %O</td>
                <td>打印一个 JavaScript 对象。单击对象名称在检查员中打开有关它的更多信息。</td>
              </tr>
              <tr>
                <td>%d or %i</td>
                <td>打印整数，支持数字格式化。例如 `console.log("Foo %.2d", 1.1)` 会输出有先导 0 的两位有效数字： `Foo 01`</td>
              </tr>
              <tr>
                <td>%s</td>
                <td>打印字符串</td>
              </tr>
              <tr>
                <td>%f</td>
                <td>打印浮点数，支持格式化，例如：`console.log("Foo %.2f", 1.1)` 会输出两位小数：`Foo 1.10`</td>
              </tr>
              <tr>
                <td>%c</td>
                <td>为打印内容定义样式。此字符后的文本将被样式影响，前面的不会。<br /><br /><code>console.log("This is %cMy stylish message", "color: yellow; font-style: italic; background-color: blue;padding: 2px");</code><br /><br />This is <span style={{
                  color: "yellow",
                  fontStyle: "italic",
                  backgroundColor: "blue",
                  padding: "2px"
                }}>My stylish message</span><br /></td>
              </tr>
            </tbody>
          </table>
        </article>
        {/* <!-- console.info --> */}
        <article className="grid-item">
          <h2 className="monospace">console.info</h2>
          <p>向控制台输出一个具体信息, 开头会显示一个 `i` 的小图标。</p>
          <h3>Syntax</h3>
          <pre className="syntax">console.info(msg [, msg1, ..., msgN]);</pre>
          <h3>Example</h3>
          <pre>console.info('Mr. Dump is not', 2, 'smart');</pre>
          <div className="bar">
            <button onClick={() => console.info('Mr. Dump is not', 2, 'smart')}>Test in your br/owser</button>
          </div>
          <h3>Output</h3>
          <div className="output blue">
            <i className="fa fa-info-circle blue" aria-hidden="true"></i> Mr. Dump is not <span className="blue">2</span> smart</div>
        </article>
        {/* <!-- console.log --> */}
        <article className="grid-item">
          <h2 className="monospace">console.log</h2>
          <p>输出一个没有图标的日志信息。你可以用这个方法使用字符串替换。</p>
          <h3>Syntax</h3>
          <pre className="syntax">console.log(msg [, msg1, ..., msgN]);</pre>
          <h3>Example</h3>
          <pre>
            {
              `console.log('Mr. Dump is not', 2, { property: 'smart' });`
            }
          </pre>
          <div className="bar">
            <button onClick={() => console.log('Mr. Dump is not', 2, { property: 'smart' })}>Test in your br/owser</button>
          </div>
          <h3>Output</h3>
          <div className="output">
            Mr. Dump is not <span className="blue">2</span> <i className="fa fa-caret-right grey" aria-hidden="true"></i> Object <span className="violet">property</span>: <span className="red">"<i>smart</i> "</span>
          </div>
        </article>
        {/* <!-- console.dir --> */}
        <article className="grid-item">
          <h2 className="monospace">console.dir</h2>
          <div>在控制台中显示指定 JavaScript 对象的属性，并通过类似文件树样式的交互列表显示。 <br /><code>console.dir</code> 最佳用途打印 DOM 元素的对象。
            <ul>
              <li>打印一个类似于 HTML 的树状结构中</li>
              <li>打印一个类似JSON的树中</li>
            </ul>
          </div>
          <h3>Syntax</h3>
          <pre className="syntax">console.dir(object);</pre>
          <h3>Example</h3>
          <pre>
            {
              `console.dir({property: 'smart'});`
            }
          </pre>
          <div className="bar">
            <button onClick={() => console.dir({ property: 'smart' })}>Test in your br/owser</button>
          </div>
          <h3>Output</h3>
          <div className="output">
            <i className="fa fa-caret-right grey" aria-hidden="true"></i> Object</div>
        </article>
        {/* <!-- console.warn --> */}
        <article className="grid-item">
          <h2 className="monospace">console.warn</h2>
          <p>向控制台输出一条警告信息。</p>
          <h3>Syntax</h3>
          <pre className="syntax">console.warn(msg [, msg1, ..., msgN]);</pre>
          <h3>Example</h3>
          <pre>console.warn('Mr. Dump is not %d smart.', 2);</pre>
          <div className="bar">
            <button onClick={() => console.warn('Mr. Dump is not %d smart.', 2)}>Test in your br/owser</button>
          </div>
          <h3>Output</h3>
          <div className="output yellow">
            <i className="fa fa-exclamation-triangle yellow" aria-hidden="true"></i> <i className="fa fa-caret-right grey" aria-hidden="true"></i> Mr. Dump is not <span className="blue">2</span> smart
          </div>
        </article>
        {/* <!-- console.error --> */}
        <article className="grid-item">
          <h2 className="monospace">console.error</h2>
          <p>打印一条错误信息。</p>
          <h3>Syntax</h3>
          <pre className="syntax">console.error(msg [, msg1, ..., msgN]);</pre>
          <h3>Example</h3>
          <pre>console.error('Mr. Dump is not %d smart.', 2);</pre>
          <div className="bar">
            <button onClick={() => console.error('Mr. Dump is not %d smart.', 2)}>Test in your br/owser</button>
          </div>
          <h3>Output</h3>
          <div className="output red">
            <i className="fa fa-times-circle red" aria-hidden="true"></i> <i className="fa fa-caret-right grey" aria-hidden="true"></i> <span className="red">Mr. Dump is not 2 smart</span>
          </div>
        </article>
        {/* <!-- console.assert --> */}
        <article className="grid-item">
          <h2 className="monospace">console.assert</h2>
          <p>如果断言为 `false`，则将一个错误消息写入控制台；如果断言为 `true`, 则没有任何反应。</p>
          <p className="note"><strong>Note:</strong><br />
            `console.assert()` 方法在 Node.js 中实现和浏览器的实现是不同的。在浏览器中当 `console.assert()`  方法接收一个值为假的时候，会向控制台输出一个错误消息，但是并不会中断代码的执行。而在 Node.js v10.0.0 之前，一个值为假，也会抛出一个 `AssertionError` ，但是会打断程序的执行。</p>
          <h3>Syntax</h3>
          <pre className="syntax">console.assert(assertion, msg1 [, msg2, ..., msgN]);</pre>
          <h3>Example</h3>
          <pre>
            {
              `
  function greaterThan(a,b) {
    console.assert(a > b, "a (%d) is not greater than b (%d)", a, b});
  }
  greaterThan(5,6);
              `
            }
          </pre>
          <div className="bar">
            <button onClick={() => {
              var isValid = false;
              console.assert(isValid, 'Mr. Dump is not here.');
            }}>Test in your br/owser</button>
          </div>
          <h3>Output</h3>
          <div className="output red">
            <i className="fa fa-times-circle red" aria-hidden="true"></i> <i className="fa fa-caret-right grey" aria-hidden="true"></i> <span className="red">a (5) is not greater than b (6)</span>
          </div>
        </article>
        {/* <!-- console.table --> */}
        <article className="grid-item">
          <h2 className="monospace">console.table</h2>
          <p>将数据以表格的形式显示。这个函数需要一个必须的参数 data，它必须是一个数组或一个对象，以及一个额外的可选参数columns。</p>
          <p className="note">
            <strong>Note:</strong><br />
            在Firefox中，console.table 只能显示 1000 行（第一行是标记的索引）。
          </p>
          <p className="note">
            在谷歌浏览器的 console.table 中，需要有两个维度的数据。第一个总是代表索引。
          </p>
          <h3>Syntax</h3>
          <pre className="syntax">console.table(data [, [column1, ..., columnN] ]);</pre>
          <h3>Example 1</h3>
          <pre>
            {`
// array of strings
console.table([ ["apples", "oranges", "bananas"] ]);
          `}
          </pre>
          <div className="bar">
            <button onClick={() => {
              console.table([[" apples", "oranges", "bananas"]]);
            }}>Test in your br/owser</button>
          </div>
          <h3>Output</h3>
          <div className="output table">
            <table>
              <thead>
                <tr>
                  <th>(index)</th>
                  <th>0</th>
                  <th>1</th>
                  <th>2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0</td>
                  <td className="red">"apples"</td>
                  <td className="red">"oranges"</td>
                  <td className="red">"bananas"</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3>Example 2</h3>
          <pre>
            {
              `
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

var family = { };
family.mother = new Person("Susan", "Doyle", 32);
family.father = new Person("John", "Doyle", 33);
family.daughter = new Person("Lily", "Doyle", 5);
family.son = new Person("Mike", "Doyle", 8);

console.table(family, ["firstName", "age"]);
            `
            }
          </pre>
          <div className="bar">
            <button onClick={() => console.log("tableMethod()")}>Test in your br/owser</button>
          </div>
          <h3>Output</h3>
          <div className="output table">
            <table>
              <thead>
                <tr>
                  <th>(index)</th>
                  <th>firstName</th>
                  <th>age</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>mother</td>
                  <td className="red">"Lea"</td>
                  <td className="blue">32</td>
                </tr>
                <tr>
                  <td>father</td>
                  <td className="red">"Jan"</td>
                  <td className="blue">33</td>
                </tr>
                <tr>
                  <td>daughter</td>
                  <td className="red">"Julia"</td>
                  <td className="blue">6</td>
                </tr>
                <tr>
                  <td>son</td>
                  <td className="red">"Nicolas"</td>
                  <td className="blue">15</td>
                </tr>
              </tbody>
            </table>
          </div>
        </article>
        {/* <!-- console.clear --> */}
        <article className="grid-item">
          <h2 className="monospace">console.clear</h2>
          <p>清空控制台。</p>
          <h3>Syntax</h3>
          <pre className="syntax">console.clear();</pre>
        </article>
        {/* <!-- console.count --> */}
        <article className="grid-item">
          <h2 className="monospace">console.count</h2>
          <p>输出 `count()` 被调用的次数。此函数接受一个可选参数 `label`(字符串)。如果有 `label` ，此函数输出为该 `label` 和 `count()` 被调用的次数。</p>
          <p>如果 `label` 未设置(默认“default”)，此函数输出` count() `在其所处位置上被调用的次数。</p>
          <h3>Syntax</h3>
          <pre className="syntax">console.count();</pre>
          <h3>Example</h3>
          <pre>
            {
              `
function login(name) {
  console.count(name + ' logged in');
}

login("Bob");
login("Mike");
login("Bob");
login("Bob");
            `
            }
          </pre>
          <div className="bar">
            <button onClick={() => console.log("testCount()")}>Test in your br/owser</button>
          </div>
          <h3>Output</h3>
          <div className="output">
            <span className="blue">Bob logged in: 1</span><br />
            <span className="blue">Mike logged in: 1</span><br />
            <span className="blue">Bob logged in: 2</span><br />
            <span className="blue">Bob logged in: 3</span>
          </div>
        </article>
        {/* <!-- console.time --> */}
        <article className="grid-item">
          <h2 className="monospace">console.time</h2>
          <p>
            启动一个新的定时器。调用 `console.timeEnd()` 来停止定时器，并将经过的时间打印到Console上。
          </p>
          <p>
            传递一个可选的标签，以改变在经过的时间之前的输出文本。用相同的标签调用`console.timeEnd()`来停止定时器。<br /> 可使用标签来同时运行多个定时器。
          </p>
          <h3>Syntax</h3>
          <pre className="syntax">
            console.time([label]);
            ...
            console.timeEnd([label]);
          </pre>
          <h3>Example</h3>
          <pre>
            {
              `
console.time();
var arr = new Array(10000);
for (var i = 0; i < arr.length; i++) {
  arr[i] = new Object();
}
console.timeEnd();
            `
            }
          </pre>
          <div className="bar">
            <button onClick={() => console.log("testTime()")}>Test in your br/owser</button>
          </div>
          <h3>Output</h3>
          <div className="output">
            <span className="blue">default: 3.35ms</span>
          </div>
          <h3>Example multiple usage</h3>
          <pre>
            {`
console.time('total');
console.time('init arr');
var arr = new Array(10000);
console.timeEnd('init arr');
for (var i = 0; i < arr.length; i++) {
  arr[i] = new Object();
}
console.timeEnd('total');
          `}
          </pre>
          <div className="bar">
            <button onClick={() => console.log("testTimeMultiple()")}>Test in your br/owser</button>
          </div>
          <h3>Output</h3>
          <div className="output">
            <span className="blue">init arr: 0.0720ms</span><br /><span className="blue">total: 4.34ms</span>
          </div>
        </article>
        {/* <!-- console.group --> */}
        <article className="grid-item">
          <h2 className="monospace">console.group</h2>
          <p>
            启动一个新的组。调用`console.groupEnd()`来关闭组。<br />你也可以对组进行嵌套。
          </p>
          <p className="note">要显示已创建的组的折叠，请使用 <strong>console.groupCollapsed</strong></p>
          <h3>Syntax</h3>
          <pre className="syntax">
            console.group(msg [, msg1, ..., msgN]);
            ...
            console.groupEnd(msg [, msg1, ..., msgN]);
          </pre>
          <h3>Example</h3>
          <pre>
            {`
function name(obj) {
  console.group('name');
  console.log('first: ', obj.first);
  console.log('middle: ', obj.middle);
  console.log('last: ', obj.last);
  console.groupEnd();
}

name({"first":"Wile","middle":"E","last":"Coyote"});
          `}
          </pre>
          <div className="bar">
            <button onClick={() => console.log("testGroup()")}>Test in your br/owser</button>
          </div>
          <h3>Output</h3>
          <div className="output">
            <i className="fa fa-caret-down grey" aria-hidden="true"></i> <strong>name</strong><br />
            <span className="tab"></span>first:  Wile<br />
            <span className="tab"></span>middle:  E<br />
            <span className="tab"></span>last:  Coyote<br />
          </div>
          <h3>Example nested usage</h3>
          <pre>
            {`
function name(obj) {
  console.group('name');
  console.log('first: ', obj.first);
  console.log('middle: ', obj.middle);
  console.log('last: ', obj.last);
  console.groupEnd();
}

function doStuff() {
  console.group('doStuff()');
  name({"first":"Wile","middle":"E","last":"coyote"});
  console.groupEnd();
}

doStuff();
          `}
          </pre>
          <div className="bar">
            <button onClick={() => console.log("testGroupNested()")}>Test in your br/owser</button>
          </div>
          <h3>Output</h3>
          <div className="output">
            <i className="fa fa-caret-down grey" aria-hidden="true"></i> <strong>doStuff()</strong><br />
            <span className="tab"></span><i className="fa fa-caret-down grey" aria-hidden="true"></i> <strong>name</strong><br />
            <span className="tab"></span><span className="tab"></span>first:  Wile<br />
            <span className="tab"></span><span className="tab"></span>middle:  E<br />
            <span className="tab"></span><span className="tab"></span>last:  Coyote<br />
          </div>
        </article>
        {/* <!-- console.groupCollapsed --> */}
        <article className="grid-item">
          <h2 className="monospace">console.groupCollapsed</h2>
          <p>和 `console.group()` 功能类似，不同的是，新建的分组默认是折叠的，用户必须点击一个按钮才能将折叠的内容打开。</p>
          <h3>Syntax</h3>
          <pre className="syntax">
            console.groupCollapsed(msg [, msg1, ..., msgN]);
            ...
            console.groupEnd(msg [, msg1, ..., msgN]);
          </pre>
        </article>
        {/* <!-- console.timeStamp --> */}
        <article className="grid-item">
          <h2 className="monospace">console.timeStamp</h2>
          <p>向浏览器的
            <a href="https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/reference"> Performance </a>
            或者
            <a href="https://firefox-source-docs.mozilla.org/devtools-user/performance/waterfall/index.html"> Waterfall </a>
            工具添加一个标记。这样可以让你将代码中的一个点和其他在时间轴上已记录的事件相关联，例如布局事件和绘制事件等。
          </p>
          <p>你可以选择用一个参数来作为时间戳标签，然后标记旁边就会显示这个标签。</p>
          <h3>Syntax</h3>
          <pre className="syntax">console.timeStamp([label]);</pre>
        </article>
        {/* <!-- console.profile --> */}
        <article className="grid-item">
          <h2 className="monospace">console.profile</h2>
          <p>开始记录性能描述信息 。可以提供一个 `profileName` (字符串) 参数来命名描述信息，这将允许你在有多个描述信息被记录时来选择只停止那个描述信息（被你命名的那个）。</p>
          <h3>Syntax</h3>
          <pre className="syntax">console.profile([label]);</pre>
          <h3>Example</h3>
          <pre>
            {`
function processPixels() {
  console.profile("processPixels()");
  // later, after processing pixels
  console.profileEnd();
}
          `}
          </pre>
        </article>
      </main>
    </div>
  );
};

export default CLogPage;
