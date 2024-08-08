import { Button } from "@mui/material";
import { useMoveBack } from "../hooks/useMoveback";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    <main className="h-screen p-20 flex items-center justify-center">
      <div className="bg-gray-50 p-20 rounded-sm border border-solid border-gray-50">
        <header className="text-lg mb-2">
          The page you are looking for could not be found 😢
        </header>
        <Button
          variant="outlined"
          startIcon={<ArrowBackIosIcon />}
          onClick={moveBack}
        >
          back
        </Button>
      </div>
    </main>
  );
}

export default PageNotFound;
