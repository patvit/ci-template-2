export default function orderByProps(obj, props) {
  const result = [];
  let unsort = Object.entries(obj);

  props.forEach((prop) => {
    result.push(Object.entries(obj).find((objProp) => objProp[0] === prop));
    unsort = unsort.filter((objProp) => objProp[0] !== prop);
  });

  result.push(...unsort.sort());

  return result.map((element) => ({ key: element[0], value: element[1] }));
}
