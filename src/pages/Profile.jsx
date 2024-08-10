import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import useUser from "../hooks/useUser";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PhoneIcon from "@mui/icons-material/Phone";
export default function Profile() {
  const { user } = useUser();
  return (
    <div className="sm:px-6 sm:py-4">
      <Container maxWidth="sm">
        <Box mt={5}>
          <Card className="shadow-lg rounded-lg overflow-hidden">
            <Box
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-6"
              display="flex"
              alignItems="center"
              flexDirection="column"
            >
              <Avatar
                sx={{ width: 80, height: 80 }}
                src="default-user.jpg"
                className="mb-4"
              />
              <Typography variant="h5" gutterBottom>
                {user?.firstName} {user?.lastName}
              </Typography>
            </Box>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} className="flex items-center">
                  <AccountCircleIcon className="mr-2 text-blue-500" />
                  <Typography variant="body1" className="text-gray-700">
                    Username: {user?.username}
                  </Typography>
                </Grid>
                <Grid item xs={12} className="flex items-center">
                  <EmailIcon className="mr-2 text-blue-500" />
                  <Typography variant="body1" className="text-gray-700">
                    Email: {user?.originalEmail?.email}
                  </Typography>
                </Grid>
                <Grid item xs={12} className="flex items-center">
                  <PhoneIcon className="mr-2 text-blue-500" />
                  <Typography variant="body1" className="text-gray-700">
                    Phone: {user?.phone}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </div>
  );
}
