const checkIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
    <path d="M13.8535 3.64645C14.0488 3.84171 14.0488 4.15829 13.8535 4.35355L6.85355 11.3536C6.65829 11.5488 6.34171 11.5488 6.14645 11.3536L2.64645 7.85355C2.45118 7.65829 2.45118 7.34171 2.64645 7.14645C2.84171 6.95118 3.15829 6.95118 3.35355 7.14645L6.5 10.2929L13.1464 3.64645C13.3417 3.45118 13.6583 3.45118 13.8535 3.64645Z" />
  </svg>
);

const crossIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
    <path d="M12.8536 3.14645C13.0488 3.34171 13.0488 3.65829 12.8536 3.85355L9.70711 7L12.8536 10.1464C13.0488 10.3417 13.0488 10.6583 12.8536 10.8536C12.6583 11.0488 12.3417 11.0488 12.1464 10.8536L9 7.70711L5.85355 10.8536C5.65829 11.0488 5.34171 11.0488 5.14645 10.8536C4.95118 10.6583 4.95118 10.3417 5.14645 10.1464L8.29289 7L5.14645 3.85355C4.95118 3.65829 4.95118 3.34171 5.14645 3.14645C5.34171 2.95118 5.65829 2.95118 5.85355 3.14645L9 6.29289L12.1464 3.14645C12.3417 2.95118 12.6583 2.95118 12.8536 3.14645Z" />
  </svg>
);

const OfferList = ({
  text,
  status,
}: {
  text: string;
  status: "active" | "inactive";
}) => {
  return (
    <div className={`mb-4 flex items-start gap-3 rounded-md p-2 transition-colors ${
      status === "active" 
        ? "bg-green-50 dark:bg-green-900/20" 
        : "bg-gray-50 dark:bg-gray-800/30"
    }`}>
      <span className={`mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full ${
        status === "active"
          ? "bg-green-500 text-white"
          : "bg-gray-300 text-gray-500 dark:bg-gray-600 dark:text-gray-400"
      }`}>
        {status === "active" ? checkIcon : crossIcon}
      </span>
      <p className={`m-0 text-base font-medium ${
        status === "active"
          ? "text-gray-900 dark:text-white"
          : "text-gray-500 line-through dark:text-gray-400"
      }`}>
        {text}
      </p>
    </div>
  );
};

export default OfferList;
