// TODO: write your code here
import orderByProps from './basic';

const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40,
};

console.log(orderByProps(obj, ['name', 'level']));