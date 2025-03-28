function Table({ children }) {
  return (
    <div className=" overflow-x-scroll">
      <table className=" text-slate-500 overflow-x-scroll">{children}</table>
    </div>
  );
}
export default Table;

function TableHeader({ children }) {
  return (
    <thead>
      <tr className="title-row dark:text-slate-400">{children}</tr>
    </thead>
  );
}

function TableBody({ children }) {
  return <tbody className=" bg-[#efefef] dark:bg-slate-500 dark:text-slate-300">{children}</tbody>;
}

function TableRow({ children }) {
  return <tr className="border-b dark:border-b-slate-400">{children}</tr>;
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
