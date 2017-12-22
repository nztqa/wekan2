import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import AppLayout from '../../ui/layouts/AppLayout.js';

Meteor.startup(() => {
  render(<AppLayout />, document.getElementById('react-root'));
});
