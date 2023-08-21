
import React, { useState } from 'react';
import {
  Checkbox,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

interface Department {
  department: string;
  sub_departments: string[];
}

const DropDown: React.FC<{ data: Department[] }> = ({ data }) => {
  const [expandedDept, setExpandedDept] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleToggleExpand = (department: string) => {
    if (expandedDept === department) {
      setExpandedDept(null);
    } else {
      setExpandedDept(department);
    }
  };

  const handleToggleSelect = (item: string) => {
    const selectedIndex = selectedItems.indexOf(item);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = [...selectedItems, item];
    } else {
      newSelected = selectedItems.filter((s) => s !== item);
    }

    setSelectedItems(newSelected);
  };

  const handleSelectAllSubDepts = (department: string) => {
    const subDepartments =
      data.find((dept) => dept.department === department)?.sub_departments || [];
    const allSubDeptsSelected = subDepartments.every((subDept) =>
      selectedItems.includes(subDept)
    );

    let newSelected: string[] = [];

    if (!allSubDeptsSelected) {
      newSelected = [...selectedItems, ...subDepartments, department];
    } else {
      newSelected = selectedItems.filter((s) => !subDepartments.includes(s));
    }

    setSelectedItems(newSelected);
  };

  return (

    <List style={{width:300}}>
      <div className="contaner">
      {data.map((dept) => (
        <div key={dept.department}>
          <ListItem button onClick={() => handleToggleExpand(dept.department)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={
                  selectedItems.includes(dept.department) &&
                  dept.sub_departments.every((subDept) => selectedItems.includes(subDept))
                }
                onChange={() => handleSelectAllSubDepts(dept.department)}
                tabIndex={-1}
                disableRipple
              />
            </ListItemIcon>
            <ListItemText primary={dept.department} />
            {expandedDept === dept.department ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={expandedDept === dept.department}  unmountOnExit>
            <List component="div" disablePadding>
              {dept.sub_departments.map((subDept) => (
                <ListItem
                  key={subDept}
                  onClick={() => handleToggleSelect(subDept)}
                  style={{ paddingLeft: 32 }}
                >
                  <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={selectedItems.includes(subDept)}
                      tabIndex={-1}
                      disableRipple
                    />
                  </ListItemIcon>
                  <ListItemText primary={subDept} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
      </div>
    </List>
  );
};

export default DropDown;
