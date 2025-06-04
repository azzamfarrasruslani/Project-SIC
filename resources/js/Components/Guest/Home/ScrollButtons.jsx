
import Icon from "@/Components/Icon/Icon";
const ScrollButtons = ({ onTop, onBottom }) => {
    return (
        <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
            <button
                onClick={onTop}
                className=" border-2 border-lime-700 text-lime-700 h-12 w-12 rounded-full shadow  transition-all duration-200 transform hover:scale-105"
            >
                <Icon name="arrowUp"></Icon>
            </button>
            <button
                onClick={onBottom}
                 className=" border-2 border-lime-700 text-lime-700 h-12 w-12 rounded-full shadow transition-all duration-200 transform hover:scale-105"
            >
                {" "}
                <Icon name="arrowDown"></Icon>
            </button>
        </div>
    );
};
export default ScrollButtons;
