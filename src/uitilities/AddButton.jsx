export default function AddButton(action, actionIcon) {
    return <button
        onClick={action}
        className={`bg-transparent text-gray-700 w-full px-6 py-3 sm:w-auto `}
    >
        {actionIcon}
    </button>;
}