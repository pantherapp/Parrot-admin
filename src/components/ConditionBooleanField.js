import React from 'react';
import {
  TextField
} from 'react-admin';

const reports = {
    no: "No Report",
    yes: "Reported by user"
}

const ConditionBooleanField = ({ record, ...rest }) => {
    return record.report_users
        ? <TextField record={reports} source="yes" />
        : <TextField record={reports} source="no" />;
}

ConditionBooleanField.defaultProps = {
    addLabel: true,
};


export default ConditionBooleanField;
