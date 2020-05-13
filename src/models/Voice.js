import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  Show,
  SimpleShowLayout
} from 'react-admin';
import {CommentField, AudioPlayerField, ConditionBooleanField, CommentListField } from '../components';

export const VoiceList = props => (
  <List {...props} >
    <Datagrid rowClick="show">
      <TextField label="Location" source="address" />
      <CommentField label="Comments" source="id" />
      <AudioPlayerField label="Voice" source="voice_url" />
      <ConditionBooleanField source="report_users" />
    </Datagrid>
  </List>
);

export const VoiceShow = props => (
  <Show {...props}>
    <SimpleShowLayout>
        <TextField label="Location" source="address" />
        <AudioPlayerField label="Voice" source="voice_url" />
        <CommentListField label="Comments" source="id" />
        <ConditionBooleanField source="report_users" />
    </SimpleShowLayout>
  </Show>
);
