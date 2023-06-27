import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  HomeIcon,
  PhoneIcon,
  InformationCircleIcon,
  BookOpenIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <Card className="sticky top-0 sidebar h-[calc(100vh-2rem)] p-2 shadow-md bg-yellow-50">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <List>
        <ListItem onClick={() => navigate("/")}>
          <ListItemPrefix>
            <HomeIcon className="h-5 w-5" />
          </ListItemPrefix>
          Home
        </ListItem>
        <ListItem onClick={() => navigate("/contact")}>
          <ListItemPrefix>
            <PhoneIcon className="h-5 w-5" />
          </ListItemPrefix>
          Contact
        </ListItem>
        <ListItem onClick={() => navigate("/information")}>
          <ListItemPrefix>
            <InformationCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Information
        </ListItem>
        <ListItem onClick={() => navigate("/guide")}>
          <ListItemPrefix>
            <BookOpenIcon className="h-5 w-5" />
          </ListItemPrefix>
          Guide
        </ListItem>
      </List>
    </Card>
  );
}
