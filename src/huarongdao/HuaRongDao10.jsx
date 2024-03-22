import { useRef, useState, createRef } from 'react';
import gsap from 'gsap';
import './HuaRongDao.scss';

function HuaRongDao10() {
  // 创建一个存储 ref 的数组
  const boxRefs = useRef(Array.from({ length: 100 }, () => createRef()));

  //华容道算法输出结果
  const targets = [{ targetElement: 2, targetRow: 1, targetColumn: 1 }];

  //10*10网格空位初始配置表
  const gridConfig = [
    { row: 0, col: 0, isDisplayNull: true },
    { row: 0, col: 1, isDisplayNull: false },
    { row: 0, col: 2, isDisplayNull: false },
    { row: 0, col: 3, isDisplayNull: false },
    { row: 0, col: 4, isDisplayNull: false },
    { row: 0, col: 5, isDisplayNull: false },
    { row: 0, col: 6, isDisplayNull: false },
    { row: 0, col: 7, isDisplayNull: false },
    { row: 0, col: 8, isDisplayNull: false },
    { row: 0, col: 9, isDisplayNull: false },
    { row: 1, col: 0, isDisplayNull: false },
    { row: 1, col: 1, isDisplayNull: false },
    { row: 1, col: 2, isDisplayNull: false },
    { row: 1, col: 3, isDisplayNull: false },
    { row: 1, col: 4, isDisplayNull: false },
    { row: 1, col: 5, isDisplayNull: false },
    { row: 1, col: 6, isDisplayNull: false },
    { row: 1, col: 7, isDisplayNull: false },
    { row: 1, col: 8, isDisplayNull: false },
    { row: 1, col: 9, isDisplayNull: false },
    { row: 2, col: 0, isDisplayNull: false },
    { row: 2, col: 1, isDisplayNull: false },
    { row: 2, col: 2, isDisplayNull: false },
    { row: 2, col: 3, isDisplayNull: false },
    { row: 2, col: 4, isDisplayNull: false },
    { row: 2, col: 5, isDisplayNull: false },
    { row: 2, col: 6, isDisplayNull: false },
    { row: 2, col: 7, isDisplayNull: false },
    { row: 2, col: 8, isDisplayNull: false },
    { row: 2, col: 9, isDisplayNull: false },
    { row: 3, col: 0, isDisplayNull: false },
    { row: 3, col: 1, isDisplayNull: false },
    { row: 3, col: 2, isDisplayNull: false },
    { row: 3, col: 3, isDisplayNull: false },
    { row: 3, col: 4, isDisplayNull: false },
    { row: 3, col: 5, isDisplayNull: false },
    { row: 3, col: 6, isDisplayNull: false },
    { row: 3, col: 7, isDisplayNull: false },
    { row: 3, col: 8, isDisplayNull: false },
    { row: 3, col: 9, isDisplayNull: false },
    { row: 4, col: 0, isDisplayNull: false },
    { row: 4, col: 1, isDisplayNull: false },
    { row: 4, col: 2, isDisplayNull: false },
    { row: 4, col: 3, isDisplayNull: false },
    { row: 4, col: 4, isDisplayNull: false },
    { row: 4, col: 5, isDisplayNull: false },
    { row: 4, col: 6, isDisplayNull: false },
    { row: 4, col: 7, isDisplayNull: false },
    { row: 4, col: 8, isDisplayNull: false },
    { row: 4, col: 9, isDisplayNull: false },
    { row: 5, col: 0, isDisplayNull: false },
    { row: 5, col: 1, isDisplayNull: false },
    { row: 5, col: 2, isDisplayNull: false },
    { row: 5, col: 3, isDisplayNull: false },
    { row: 5, col: 4, isDisplayNull: false },
    { row: 5, col: 5, isDisplayNull: false },
    { row: 5, col: 6, isDisplayNull: false },
    { row: 5, col: 7, isDisplayNull: false },
    { row: 5, col: 8, isDisplayNull: false },
    { row: 5, col: 9, isDisplayNull: false },
    { row: 6, col: 0, isDisplayNull: false },
    { row: 6, col: 1, isDisplayNull: false },
    { row: 6, col: 2, isDisplayNull: false },
    { row: 6, col: 3, isDisplayNull: false },
    { row: 6, col: 4, isDisplayNull: false },
    { row: 6, col: 5, isDisplayNull: false },
    { row: 6, col: 6, isDisplayNull: false },
    { row: 6, col: 7, isDisplayNull: false },
    { row: 6, col: 8, isDisplayNull: false },
    { row: 6, col: 9, isDisplayNull: false },
    { row: 7, col: 0, isDisplayNull: false },
    { row: 7, col: 1, isDisplayNull: false },
    { row: 7, col: 2, isDisplayNull: false },
    { row: 7, col: 3, isDisplayNull: false },
    { row: 7, col: 4, isDisplayNull: false },
    { row: 7, col: 5, isDisplayNull: false },
    { row: 7, col: 6, isDisplayNull: false },
    { row: 7, col: 7, isDisplayNull: false },
    { row: 7, col: 8, isDisplayNull: false },
    { row: 7, col: 9, isDisplayNull: false },
    { row: 8, col: 0, isDisplayNull: false },
    { row: 8, col: 1, isDisplayNull: false },
    { row: 8, col: 2, isDisplayNull: false },
    { row: 8, col: 3, isDisplayNull: false },
    { row: 8, col: 4, isDisplayNull: false },
    { row: 8, col: 5, isDisplayNull: false },
    { row: 8, col: 6, isDisplayNull: false },
    { row: 8, col: 7, isDisplayNull: false },
    { row: 8, col: 8, isDisplayNull: false },
    { row: 8, col: 9, isDisplayNull: false },
    { row: 9, col: 0, isDisplayNull: false },
    { row: 9, col: 1, isDisplayNull: false },
    { row: 9, col: 2, isDisplayNull: false },
    { row: 9, col: 3, isDisplayNull: false },
    { row: 9, col: 4, isDisplayNull: false },
    { row: 9, col: 5, isDisplayNull: false },
    { row: 9, col: 6, isDisplayNull: false },
    { row: 9, col: 7, isDisplayNull: false },
    { row: 9, col: 8, isDisplayNull: false },
    { row: 9, col: 9, isDisplayNull: true }
  ];

  // 使用timeline
  let tl = gsap.timeline();

  const moveBoxTimeline = () => {
    // const targetElement = 8; // 传入的数字
    // moveBox(targetElement, targetRow, targetColumn);

    //迭代targets数组
    targets.forEach((target) => {
      moveBox(target.targetElement, target.targetRow, target.targetColumn);
    });
  };

  const moveBox = (targetElement, targetRow, targetColumn) => {
    // 根据 targetElement 的值来获取对应的 boxRef
    const targetRef = boxRefs.current[targetElement - 1]?.current;

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
  //通过数组判断n行n列的元素，如果是则返回false
  const isDisplayNull = (gridConfig, row, col) => {
    if (gridConfig.length === 0) {
      return false;
    }
    const item = gridConfig.find(
      (item) => item.row === row && item.col === col
    );
    return item ? item.isDisplayNull : false;
  };

  const numRows = 10;
  const numCols = 10;

  // 创建一个数组来保存所有单元格的元素
  const cells = [];

  // 循环生成行和列
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      // 计算当前单元格的索引
      const index = row * numCols + col;
      let cell = (
        <div
          key={index}
          ref={boxRefs.current[index]} // 设置 ref
          className="box"
          style={
            isDisplayNull(gridConfig, row, col)
              ? {
                  gridArea: `${row + 1} / ${col + 1} / ${row + 2} / ${col + 2}`,
                  display: 'none'
                }
              : {
                  gridArea: `${row + 1} / ${col + 1} / ${row + 2} / ${col + 2}`
                }
          }
        >
          Box {index + 1}
        </div>
      );
      cells.push(cell);
    }
  }

  return (
    <main>
      <h2>10行10列华容道</h2>
      <button onClick={moveBoxTimeline} className="my-2">
        触发动作
      </button>
      <section
        className="boxes-container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gridTemplateRows: '1fr 1fr 1fr',
          gap: '10px'
        }}
      >
        {cells}
      </section>
    </main>
  );
}

export default HuaRongDao10;
