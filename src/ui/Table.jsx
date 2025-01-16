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
      <tr className="title-row">{children}</tr>
    </thead>
  );
}

function TableBody({ children }) {
  return <tbody className=" bg-[#efefef]">{children}</tbody>;
}

function TableRow({ children }) {
  return <tr className="border-b">{children}</tr>;
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
