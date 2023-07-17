const cache: any = {};
let inited: any;

function handleRules(rules: any) {
  // 返回为空忽略
  if (!rules) {
    return;
  }
  // 将数据存到远程存储服务（这里以存到内存为例，方便演示界面如何同步远程规则）
  cache.rules = rules;
}

function handleValues(values: any) {
  // 返回为空忽略
  if (!values) {
    return;
  }
  // 将数据存到远程存储服务（这里以存到内存为例，方便演示界面如何同步远程规则）
  cache.values = values;
}

export default ({ getRules, getValues }: any) => {
  if (inited) {
    return;
  }
  inited = true;
  // 定时获取 Rules & Values
  const loadData = () => {
    getRules(handleRules);
    getValues(handleValues);
  };
  loadData();
  setInterval(loadData, 2000);
};

export const getRules = () => {
  return cache.rules;
};

export const getValues = () => {
  return cache.values;
};
