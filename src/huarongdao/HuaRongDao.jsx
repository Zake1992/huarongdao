import { useRef, useState } from 'react';
import gsap from 'gsap';
import './HuaRongDao.scss';

function HuaRongDao() {
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);
  const boxRef4 = useRef(null);
  const boxRef5 = useRef(null);
  const boxRef6 = useRef(null);
  const boxRef7 = useRef(null);
  const boxRef8 = useRef(null);
  const boxRef9 = useRef(null);

  const [targetRow, setTargetRow] = useState(3);
  const [targetColumn, setTargetColumn] = useState(3);

  const targets = [
    { targetElement: 8, targetRow: 3, targetColumn: 3 },
    { targetElement: 7, targetRow: 3, targetColumn: 2 },
    { targetElement: 6, targetRow: 3, targetColumn: 1 },
    { targetElement: 5, targetRow: 2, targetColumn: 3 },
    { targetElement: 4, targetRow: 2, targetColumn: 2 },
    { targetElement: 3, targetRow: 2, targetColumn: 1 },
    { targetElement: 2, targetRow: 1, targetColumn: 3 },
    { targetElement: 1, targetRow: 1, targetColumn: 2 }
  ];
  // 使用timeline
  let tl = gsap.timeline();

  const moveBox8 = () => {
    const targetElement = 8; // 传入的数字
    moveBox(targetElement, targetRow, targetColumn);

    //迭代targets数组
    targets.forEach((target) => {
      moveBox(target.targetElement, target.targetRow, target.targetColumn);
    });
  };

  const moveBox = (targetElement, targetRow, targetColumn) => {
    // 创建一个数组来存储所有 boxRef
    const boxRefs = [
      boxRef1,
      boxRef2,
      boxRef3,
      boxRef4,
      boxRef5,
      boxRef6,
      boxRef7,
      boxRef8,
      boxRef9
    ];

    // 根据 targetElement 的值来获取对应的 boxRef
    const targetRef = boxRefs[targetElement - 1]?.current;

    // 检查是否成功获取到了目标引用
    if (!targetRef) {
      console.error('未找到目标元素');
      return;
    }

    // 使用 targetRef 执行动画或其他操作
    tl.to(targetRef, {
      gridArea: `${targetRow} / ${targetColumn} / ${targetRow + 1} / ${targetColumn + 1}`,
      duration: 2
    });
  };

  return (
    <main>
      <h2>3行3列华容道</h2>
      <button onClick={moveBox8}>触发动作</button>
      <section
        className="boxes-container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridTemplateRows: '1fr 1fr 1fr',
          gap: '10px'
        }}
      >
        <div className="box l" ref={boxRef1}>
          Box 1
        </div>
        <div
          className="box"
          ref={boxRef2}
          style={{ gridArea: '1 / 2 / 2 / 3' }}
        >
          Box 2
        </div>
        <div
          className="box"
          ref={boxRef3}
          style={{ gridArea: '1 / 3 / 2 / 4' }}
        >
          Box 3
        </div>
        <div
          className="box"
          ref={boxRef4}
          style={{ gridArea: '2 / 1 / 3 / 2' }}
        >
          Box 4
        </div>
        <div
          className="box"
          ref={boxRef5}
          style={{ gridArea: '2 / 2 / 3 / 3' }}
        >
          Box 5
        </div>
        <div
          className="box"
          ref={boxRef6}
          style={{ gridArea: '2 / 3 / 3 / 4' }}
        >
          Box 6
        </div>
        <div
          className="box"
          ref={boxRef7}
          style={{ gridArea: '3 / 1 / 4 / 2' }}
        >
          Box 7
        </div>
        <div
          className="box"
          ref={boxRef8}
          style={{ gridArea: '3 / 2 / 4 / 3' }}
        >
          Box 8
        </div>
        {/* <div
          className="box"
          ref={boxRef9}
          style={{ gridArea: '3 / 3 / 4 / 4' }}
        >
          Box 9
        </div> */}
      </section>
    </main>
  );
}

export default HuaRongDao;
