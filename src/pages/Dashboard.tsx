import React from 'react';
import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  TextField,
  InputAdornment,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Divider,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  LibraryBooks as LibraryBooksIcon,
  Person as PersonIcon,
  CalendarToday as CalendarTodayIcon,
  Payment as PaymentIcon,
  Settings as SettingsIcon,
  AdminPanelSettings as AdminPanelSettingsIcon,
  Search as SearchIcon,
} from '@mui/icons-material';

const drawerWidth = 240;

export default function dashboard() {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F5F6FA' }}>
      {/* Side Navbar */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#2962FF',
            color: '#fff',
          },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Schooltec
          </Typography>
        </Toolbar>
        <List sx={{ flexGrow: 1 }}>
          <ListItem button>
            <ListItemIcon sx={{ color: '#fff' }}>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>

          <ListItem button>
            <ListItemIcon sx={{ color: '#fff' }}>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Students" />
          </ListItem>

          <ListItem button>
            <ListItemIcon sx={{ color: '#fff' }}>
              <LibraryBooksIcon />
            </ListItemIcon>
            <ListItemText primary="Courses" />
          </ListItem>

          <ListItem button>
            <ListItemIcon sx={{ color: '#fff' }}>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Teachers" />
          </ListItem>

          <ListItem button>
            <ListItemIcon sx={{ color: '#fff' }}>
              <CalendarTodayIcon />
            </ListItemIcon>
            <ListItemText primary="Attendance" />
          </ListItem>

          <ListItem button>
            <ListItemIcon sx={{ color: '#fff' }}>
              <PaymentIcon />
            </ListItemIcon>
            <ListItemText primary="Payment" />
          </ListItem>

          <ListItem button>
            <ListItemIcon sx={{ color: '#fff' }}>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
        {/* 'Request to Admin' Button at Bottom */}
        <Box sx={{ p: 2 }}>
          <Button
            variant="contained"
            startIcon={<AdminPanelSettingsIcon />}
            sx={{
              backgroundColor: '#fff',
              color: '#2962FF',
              width: '100%',
              textTransform: 'none',
            }}
          >
            Request to Admin
          </Button>
        </Box>
      </Drawer>

      {/* Main Content Area */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* Top Navbar */}
        <AppBar
          position="static"
          sx={{
            backgroundColor: '#fff',
            color: '#000',
            boxShadow: 'none',
            borderBottom: '1px solid #e0e0e0',
          }}
        >
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
              Dashboard
            </Typography>
            {/* Search Field */}
            <TextField
              variant="outlined"
              placeholder="Search for students, teachers, courses..."
              size="small"
              sx={{ mr: 2, backgroundColor: '#f0f0f0' }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <IconButton>
              <Avatar />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Main Grid Content */}
        <Box sx={{ p: 3 }}>
          <Grid container spacing={2}>
            {/* Left Column */}
            <Grid item xs={12} md={7}>
              {/* Top Performer Card */}
              <Card sx={{ mb: 2 }}>
                <CardHeader
                  title="Top Performer"
                  action={<Button variant="text">Full Chart</Button>}
                />
                <Divider />
                <CardContent>
                  {/* Replace this with a table if you want dynamic data */}
                  <Box>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      Maria Angel
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      92% (A+)
                    </Typography>
                    <Divider sx={{ my: 1 }} />

                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      Angel Koma
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      88% (A)
                    </Typography>
                    <Divider sx={{ my: 1 }} />

                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      Jack Kom
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      85% (B+)
                    </Typography>
                    <Divider sx={{ my: 1 }} />

                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      Trent Bout
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      80% (B)
                    </Typography>
                  </Box>
                </CardContent>
              </Card>

              {/* Schedule Card */}
              <Card>
                <CardHeader title="Schedule" />
                <Divider />
                <CardContent>
                  {/* Simple placeholder calendar (Jan 2023). Adjust as needed. */}
                  <Typography variant="body1" gutterBottom>
                    January 2023
                  </Typography>
                  <Grid container spacing={1}>
                    {[...Array(31)].map((_, i) => (
                      <Grid item xs={1.5} key={i}>
                        <Box
                          sx={{
                            width: '100%',
                            height: 40,
                            backgroundColor: '#f0f0f0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 1,
                          }}
                        >
                          {i + 1}
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            {/* Right Column */}
            <Grid item xs={12} md={5}>
              {/* Three Summary Cards (Students, Courses, Earnings) */}
              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid item xs={4}>
                  <Card>
                    <CardContent>
                      <Typography variant="subtitle2" color="text.secondary">
                        Total Students
                      </Typography>
                      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                        4.5K
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card>
                    <CardContent>
                      <Typography variant="subtitle2" color="text.secondary">
                        Courses
                      </Typography>
                      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                        300
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={4}>
                  <Card>
                    <CardContent>
                      <Typography variant="subtitle2" color="text.secondary">
                        Total Earning
                      </Typography>
                      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                        $30K
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              {/* Payment Card (with Donut Chart + Payment Requests) */}
              <Card sx={{ mb: 2 }}>
                <CardHeader
                  title="Payment"
                  action={<Button variant="text">Full Chart</Button>}
                />
                <Divider />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: '100%',
                        }}
                      >
                        {/* Simple donut chart placeholder (CSS circle). Replace with real chart if needed */}
                        <Box
                          sx={{
                            width: 100,
                            height: 100,
                            borderRadius: '50%',
                            border: '10px solid #2962FF',
                            borderTopColor: '#ddd',
                            boxSizing: 'border-box',
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 'bold' }}
                        gutterBottom
                      >
                        Payment Requests
                      </Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        #123 Payment Request from Alice (Paid)
                      </Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        #124 Payment Request from Bob (Pending)
                      </Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        #125 Payment Request from Charlie (Failed)
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>

              {/* Attendance Card (with simple line chart placeholders) */}
              <Card>
                <CardHeader
                  title="Attendance"
                  action={<Button variant="text">Full Chart</Button>}
                />
                <Divider />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="body1" sx={{ fontWeight: 'bold' }} gutterBottom>
                        Students
                      </Typography>
                      {/* Placeholder line chart - you can replace with real chart */}
                      <Box
                        sx={{
                          width: '100%',
                          height: 100,
                          background: 'linear-gradient(to right, #2962FF 42%, #ddd 42%)',
                          borderRadius: 1,
                          mb: 2,
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1" sx={{ fontWeight: 'bold' }} gutterBottom>
                        Teachers
                      </Typography>
                      <Box
                        sx={{
                          width: '100%',
                          height: 100,
                          background: 'linear-gradient(to right, #2962FF 30%, #ddd 30%)',
                          borderRadius: 1,
                        }}
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}
