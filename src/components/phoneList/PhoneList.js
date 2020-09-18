import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import s from './PhoneList.module.css';

const PhoneList = ({ contacts, onRemoveContact }) => (
  <TransitionGroup component="ul" className={s.taskList}>
    {contacts.map(({ id, name, number }) => {
      return (
        <CSSTransition key={id} timeout={250} classNames={s}>
          <li className={s.item}>
            <p style={{ display: 'inline-block', margin: '10px' }}>
              {name} - {number}
            </p>
            <button
              type="button"
              className={s.btn}
              onClick={() => onRemoveContact(id)}
            >
              Del
            </button>
          </li>
        </CSSTransition>
      );
    })}
  </TransitionGroup>
);

export default PhoneList;
