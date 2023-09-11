import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { MenuPropsType } from '../types';
import FetchService from '../API/FetchService';
import { useState } from 'react';
import { menuInfo } from '../constants/constants';

export const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? '#476A6F' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export const CustomizedMenus = (props: MenuPropsType) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [info, setInfo] = useState<string>('');
  const open = Boolean(anchorEl);

  const openButtonHandler = (event: React.MouseEvent<HTMLElement>) => {
    FetchService.getPosts().then((res) => {
      props.setData(res.data)
    })
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const itemClickHandler = (id: string, desc: string) => {
    props.setItemId(id);
    setInfo(desc)
    handleClose();
  }

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={props.open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={props.open ? 'true' : undefined}
        disableElevation
        sx={{ width: 300}}
        size="large"
        onClick={openButtonHandler}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {info ? info : menuInfo}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        { props.data ? 
          props.data.map((item: any) => (
            <MenuItem onClick={() => itemClickHandler(item.id, item.desc)} disableRipple key={item.desc + Math.random()}>
              {item.desc}
            </MenuItem>)) :
          'no data'}
      </StyledMenu>
    </div>
  );
}
