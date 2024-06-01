import React, { useState } from "react";
import { Sidebar, Menu, MenuItem, ProSidebarProvider, useProSidebar } from "react-pro-sidebar";
import 'react-pro-sidebar/dist';
import { IconButton, Typography, Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HelpIcon from '@mui/icons-material/Help';
import MenuIcon from '@mui/icons-material/Menu';
import BadgeIcon from '@mui/icons-material/Badge';
import LogoutIcon from '@mui/icons-material/Logout';
import styled from "@emotion/styled";



const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Link to={to} style={{ textDecoration: "none", color: "inherit" }}>
      <MenuItem
        active={selected === title}
        style={{
          color: colors.grey[100],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
      </MenuItem>
    </Link>
  );
};

const SidebarContent = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <Box
      sx={{
        "& .ps-sidebar-container": {
          background: `${colors.primary[400]} !important`,
        },
        "& .ps-sidebar-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .ps-menuitem": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .ps-menuitem-root:hover": {
          color: "#868dfb !important",
        },
        "& .ps-menuitem.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <Sidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => {
              setIsCollapsed(!isCollapsed);
              collapseSidebar(!collapsed);
            }}
            icon={isCollapsed ? <MenuIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.primary[900]}>
                 {/*admin */}
                </Typography>
                <IconButton
                  onClick={() => {
                    setIsCollapsed(!isCollapsed);
                    collapseSidebar(!collapsed);
                  }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* USER */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/userr.png`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Admin
                </Typography>
                <Typography variant="h5" color={colors.blueAccent[500]}>
                  VMS
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {!isCollapsed && (
              <Typography
                variant="body1"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Data
              </Typography>
            )}

              <Item
              title="Employee"
              to="/employee"
              icon={<BadgeIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Visitors"
              to="/visitor"
              icon={<PersonIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contact"
              to="/contacts"
              icon={<PhoneIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {!isCollapsed && (
              <Typography
                variant="body1"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
              >
                Appointments
              </Typography>
            )}

            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarMonthIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Help"
              to="/help"
              icon={<HelpIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Logout"
              to="/logout"
              icon={<LogoutIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

const App = () => {
  return (
    <ProSidebarProvider>
      <SidebarContent />
    </ProSidebarProvider>
  );
};

export default App;
