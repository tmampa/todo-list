/**
 * @jest-environment jsdom
 */
import status from '../src/status.js';
import { editTask, clearChecked } from '../src/add_remove.js';

describe('editing a task', () => {
  const myTasks = [
    {
      description: 'Walk The Dog',
      completed: false,
      index: 1,
    },

    {
      description: 'Do Laundry',
      completed: false,
      index: 2,
    },

  ];

  document.body.innerHTML = '<p class="description" id="para"></p>';
  const para = document.getElementById('para');

  test('if task description changes after edit', () => {
    para.innerHTML = 'Hello';
    editTask(para, myTasks[0], myTasks);
    expect(myTasks[0].description).not.toMatch('Walk The Dog');
  });

  test('if task description changes after edit', () => {
    para.innerHTML = 'Hello';
    editTask(para, myTasks[0], myTasks);
    expect(myTasks[0].description).toMatch('Hello');
  });
});

describe('updating the completed status of a task', () => {
  document.body.innerHTML = '<input type="checkbox" id="checkbox">';
  const checkbox = document.getElementById('checkbox');
  const myTasks = [
    {
      description: 'Walk The Dog',
      completed: false,
      index: 1,
    },

    {
      description: 'Do Laundry',
      completed: false,
      index: 2,
    },

  ];
