import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { UserTaskListSection } from './components/ConversationList';
import { TaskDetailAndCopilotSection } from './components/TicketDetail';
import { mixedSessionList, oncallData } from './mockData';

import iconAdminOutlined from './assets/icon_admin_outlined.svg';
import iconAddSheetOutlined from './assets/icon_add-sheet_outlined.svg';
import createTicketImg from './assets/创建工单.png';
import imageCommonEmpty from './assets/image_common_empty.svg';

const G = () => (
  <style>{`
    *, *::before, *::after { box-sizing: border-box; }
    button { appearance:none; background:transparent; border:0; outline:none; cursor:pointer; padding:0; font-family:inherit; }
    input  { appearance:none; background:transparent; border:0; outline:none; font-family:inherit; }
    :root {
      --f-m12-fam:"PingFang SC",Helvetica,sans-serif; --f-m12-sz:12px; --f-m12-fw:500; --f-m12-lh:20px;
      --f-m14-fam:"PingFang SC",Helvetica,sans-serif; --f-m14-sz:14px; --f-m14-fw:500; --f-m14-lh:22px;
      --f-m16-fam:"PingFang SC",Helvetica,sans-serif; --f-m16-sz:16px; --f-m16-fw:500; --f-m16-lh:24px;
      --f-r12-fam:"PingFang SC",Helvetica,sans-serif; --f-r12-sz:12px; --f-r12-fw:400; --f-r12-lh:20px;
      --f-r14-fam:"PingFang SC",Helvetica,sans-serif; --f-r14-sz:14px; --f-r14-fw:400; --f-r14-lh:22px;
      --f-en12-fam:"SF Pro",Helvetica,sans-serif;     --f-en12-sz:12px; --f-en12-fw:400; --f-en12-lh:20px;

      --gb1:rgba(232,242,255,1); --gb6:rgba(41,98,255,1); --gb7:rgba(25,74,208,1);
      --gg1:rgba(247,248,250,1); --gg2:rgba(242,243,245,1); --gg3:rgba(229,230,235,1);
      --gg4:rgba(201,205,212,1); --gg5:rgba(169,174,184,1); --gg6:rgba(134,144,156,1);
      --gg8:rgba(78,89,105,1);   --gg10:rgba(29,33,41,1);  --gbg:rgba(255,255,255,1);

      --bg1:var(--gbg);   --bd2:var(--gg3);  --bd3:var(--gg4);
      --f1:var(--gg1);    --f2:var(--gg2);   --f4:var(--gg4);
      --t1:var(--gg10);   --t2:var(--gg8);   --t3:var(--gg6);  --t4:var(--gg5);
      --lk6:var(--gb6);   --lk7:var(--gb7);  --pr1:var(--gb1); --pr6:var(--gb6);
    }
    .m12{font-family:var(--f-m12-fam);font-size:var(--f-m12-sz);font-weight:var(--f-m12-fw);line-height:var(--f-m12-lh)}
    .m14{font-family:var(--f-m14-fam);font-size:var(--f-m14-sz);font-weight:var(--f-m14-fw);line-height:var(--f-m14-lh)}
    .m16{font-family:var(--f-m16-fam);font-size:var(--f-m16-sz);font-weight:var(--f-m16-fw);line-height:var(--f-m16-lh)}
    .r12{font-family:var(--f-r12-fam);font-size:var(--f-r12-sz);font-weight:var(--f-r12-fw);line-height:var(--f-r12-lh)}
    .r14{font-family:var(--f-r14-fam);font-size:var(--f-r14-sz);font-weight:var(--f-r14-fw);line-height:var(--f-r14-lh)}
    .en12{font-family:var(--f-en12-fam);font-size:var(--f-en12-sz);font-weight:var(--f-en12-fw);line-height:var(--f-en12-lh)}
    .ct1{color:var(--t1)}.ct2{color:var(--t2)}.ct3{color:var(--t3)}.ct4{color:var(--t4)}
    .clk6{color:var(--lk6)}.clk7{color:var(--lk7)}
    ::-webkit-scrollbar{width:4px;height:4px}
    ::-webkit-scrollbar-track{background:transparent}
    ::-webkit-scrollbar-thumb{background:var(--f4);border-radius:2px}
  `}</style>
);

const ILogo = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="16" fill="var(--pr1)"/>
    <path d="M7 16C7 11.03 11.03 7 16 7" stroke="var(--lk6)" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M7 16C7 20.97 11.03 25 16 25" stroke="var(--lk6)" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M16 7C20.97 7 25 11.03 25 16" stroke="#36CFC9" strokeWidth="2.2" strokeLinecap="round"/>
    <path d="M16 25C20.97 25 25 20.97 25 16" stroke="var(--lk6)" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="2.5 3"/>
    <circle cx="11" cy="21" r="3" fill="var(--lk6)"/>
    <circle cx="21" cy="11" r="3" fill="#36CFC9"/>
  </svg>
);

const IAdmin = () => {
  return <img src={iconAdminOutlined} alt="admin icon" style={{ width: 16, height: 16 }} />;
};

const IDown = ({s="var(--t3)"}) => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M3 5l4 4 4-4" stroke={s} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const WorkspaceContent = ({ currentRole }) => {
  const [tab,setTab]     = useState("all");
  const [selUser,setSU]  = useState(null);
  const [selTk,setSTk]   = useState(null);
  const [tabMemory, setTabMemory] = useState({});

  const [showAddMenuTaskDetail, setShowAddMenuTaskDetail] = useState(false);
  const addButtonRefTaskDetail = useRef(null);
  const menuRefTaskDetail = useRef(null);

  const [showCreateTicketModal, setShowCreateTicketModal] = useState(false);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const imageRefModal = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showAddMenuTaskDetail && addButtonRefTaskDetail.current && !addButtonRefTaskDetail.current.contains(event.target) && menuRefTaskDetail.current && !menuRefTaskDetail.current.contains(event.target)) {
        setShowAddMenuTaskDetail(false);
      }

      if (showCreateTicketModal) {
        if (imageRefModal.current) {
          const rect = imageRefModal.current.getBoundingClientRect();
          const right = rect.right;
          const top = rect.top;
          if (event.clientX >= right - 80 && event.clientX <= right && event.clientY >= top && event.clientY <= top + 80) {
            setIsVisibleModal(false);
            setTimeout(() => {
              setShowCreateTicketModal(false);
            }, 200);
          }
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showAddMenuTaskDetail, showCreateTicketModal]);

  useEffect(() => {
    if (showCreateTicketModal) {
      setIsVisibleModal(true);
    }
  }, [showCreateTicketModal]);

  const handleSelectUser = (user) => {
    setSU(user);
  };

  const handleSelectTicket = (ticket, channel) => {
    setSTk(ticket);
  };

  const changeTab = (activeTab, memoryData) => {
    setTab(activeTab);
    if (activeTab !== 'all' && memoryData) {
      if (memoryData.userId) {
        const userToSelect = mixedSessionList.find(u => u.id === memoryData.userId);
        if (userToSelect) {
          setSU(userToSelect);
        }
      }
      if (memoryData.ticketId) {
        setSTk({ id: memoryData.ticketId });
      }
    } else {
      setSU(null);
      setSTk(null);
    }
  };

  return (
    <>
      <UserTaskListSection
        activeTab={tab} onTabChange={changeTab}
        selUser={selUser} onSelUser={handleSelectUser}
        selTk={selTk} onSelTk={handleSelectTicket}
        tabMemory={tabMemory} setTabMemory={setTabMemory}
        setShowCreateTicketModal={setShowCreateTicketModal}
        role={currentRole}
        oncallData={oncallData}
      />
      <TaskDetailAndCopilotSection 
        ticket={selTk}
        showAddMenu={showAddMenuTaskDetail}
        setShowAddMenu={setShowAddMenuTaskDetail}
        setShowCreateTicketModal={setShowCreateTicketModal}
        addButtonRef={addButtonRefTaskDetail}
        menuRef={menuRefTaskDetail}
        role={currentRole}
        selUser={selUser}
        oncallData={oncallData}
      />
      {showCreateTicketModal && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1001, opacity: isVisibleModal ? 1 : 0, transition: 'opacity 0.2s ease-in-out' }}>
          <div className="create-ticket-overlay" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.4)', transition: 'opacity 0.2s ease-in-out' }} />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: isVisibleModal ? 'translate(-50%, -50%)' : 'translate(-50%, -50%) scale(0.9)', zIndex: 1002, opacity: isVisibleModal ? 1 : 0, transition: 'opacity 0.2s ease-in-out, transform 0.2s ease-out' }}>
            <img 
              ref={imageRefModal}
              src={createTicketImg} 
              alt="创建工单" 
              style={{ width: 600, objectFit: 'contain' }}
            />
          </div>
        </div>
      )}
    </>
  );
};

const LeftSidebar = ({ onPageChange, activeNavTab, onNavTabChange }) => {
  return (
    <aside style={{width:72,flexShrink:0,display:"flex",flexDirection:"column",
      alignItems:"center",justifyContent:"space-between",
      background:"var(--bg1)",borderRight:"1px solid var(--bd2)"}}>
      <header style={{display:"flex",flexDirection:"column",alignItems:"center",
        gap:16,padding:"16px 8px 8px",width:"100%",
        boxShadow:"0 0 8px rgba(0,0,0,.08)"}}>
        <div style={{width:32,height:32}}><ILogo/></div>
        <nav style={{display:"flex",flexDirection:"column",alignItems:"center",gap:12}}>
          <div style={{width:32,height:32,borderRadius:"50%",background:"var(--pr1)",
            display:"flex",alignItems:"center",justifyContent:"center"}}>
            <span className="m12 clk7" style={{fontSize:13}}>我</span>
          </div>
          <button aria-label="Add new sheet"
            style={{width:32,height:32,borderRadius:8,display:"flex",
              alignItems:"center",justifyContent:"center",
              background:"linear-gradient(0deg,rgba(41,98,255,1),rgba(41,98,255,1))"}}>
            <img src={iconAddSheetOutlined} alt="add sheet icon" style={{ width: 16, height: 16 }} />
          </button>
        </nav>
      </header>
      <nav style={{display:"flex",flexDirection:"column",alignItems:"center",gap:4,
        padding:"16px 4px 8px",flex:1,width:"100%"}}>
        <button 
          style={{display:"flex",flexDirection:"column",alignItems:"center",gap:4,
            paddingTop:10,paddingBottom:8,width:"100%",borderRadius:8,
            background:activeNavTab === 'tab1' ? "rgba(25,74,208,.08)" : "transparent",
            transition:"background-color 0.2s"}}
          onClick={() => {
            onNavTabChange('tab1');
            onPageChange('dashboard');
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: 16, height: 16, color: activeNavTab === 'tab1' ? "#194AD0" : "#626770"}}>
            <path d="M6.33325 14.6665C6.70144 14.6665 6.99992 14.368 6.99992 13.9999V11.3332C6.99992 10.965 7.2984 10.6665 7.66658 10.6665H8.33325C8.70144 10.6665 8.99992 10.965 8.99992 11.3332V13.9999C8.99992 14.368 9.29839 14.6665 9.66658 14.6665H13.3333C14.0696 14.6665 14.6666 14.0696 14.6666 13.3332V6.6665C14.6666 6.26146 14.4825 5.87838 14.1662 5.62535L8.83284 1.6662C8.34589 1.27663 7.65395 1.27663 7.16699 1.6662L1.83366 5.62535C1.51737 5.87838 1.33325 6.26146 1.33325 6.6665V13.3332C1.33325 14.0696 1.93021 14.6665 2.66659 14.6665H6.33325Z" fill="currentColor"/>
          </svg>
          <span className="m12" style={{textAlign:"center",color: activeNavTab === 'tab1' ? "#194AD0" : "#626770", fontWeight: activeNavTab === 'tab1' ? "500" : "400"}}>工作台</span>
        </button>
        <button 
          style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            gap:4,
            paddingTop:10,
            paddingBottom:8,
            width:"100%",
            borderRadius:8,
            background:activeNavTab === 'tab2' ? "rgba(25,74,208,.08)" : "transparent",
            transition:"background-color 0.2s"
          }}
          onMouseEnter={(e) => {
            if (activeNavTab !== 'tab2') {
              e.target.style.backgroundColor = "#F2F3F5";
            }
          }}
          onMouseLeave={(e) => {
            if (activeNavTab !== 'tab2') {
              e.target.style.backgroundColor = "transparent";
            }
          }}
          onClick={() => {
            onNavTabChange('tab2');
            onPageChange('dashboard');
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width: 16, height: 16, color: activeNavTab === 'tab2' ? "#194AD0" : "#626770"}}>
            <path d="M6.33325 14.6665C6.70144 14.6665 6.99992 14.368 6.99992 13.9999V11.3332C6.99992 10.965 7.2984 10.6665 7.66658 10.6665H8.33325C8.70144 10.6665 8.99992 10.965 8.99992 11.3332V13.9999C8.99992 14.368 9.29839 14.6665 9.66658 14.6665H13.3333C14.0696 14.6665 14.6666 14.0696 14.6666 13.3332V6.6665C14.6666 6.26146 14.4825 5.87838 14.1662 5.62535L8.83284 1.6662C8.34589 1.27663 7.65395 1.27663 7.16699 1.6662L1.83366 5.62535C1.51737 5.87838 1.33325 6.26146 1.33325 6.6665V13.3332C1.33325 14.0696 1.93021 14.6665 2.66659 14.6665H6.33325Z" fill="currentColor"/>
          </svg>
          <span className="m12" style={{textAlign:"center",color: activeNavTab === 'tab2' ? "#194AD0" : "#626770", fontWeight: activeNavTab === 'tab2' ? "500" : "400"}}>工作台</span>
        </button>
      </nav>
    </aside>
  );
};

const Screen = () => {
  const [activeNavTab, setActiveNavTab] = useState('tab1');
  const [page, setPage] = useState('dashboard');

  return (
    <div style={{display:"flex",height:"100vh",background:"var(--bg2)"}}>
      <G/>
      <LeftSidebar 
        activeNavTab={activeNavTab} 
        onNavTabChange={setActiveNavTab} 
        onPageChange={setPage}
      />
      <div style={{flex:1,display:"flex",overflow:"hidden"}}>
        <div style={{ display: activeNavTab === 'tab1' ? 'contents' : 'none', flex: 1, display: activeNavTab === 'tab1' ? 'flex' : 'none' }}>
          <WorkspaceContent currentRole="tab1" />
        </div>
        <div style={{ display: activeNavTab === 'tab2' ? 'contents' : 'none', flex: 1, display: activeNavTab === 'tab2' ? 'flex' : 'none' }}>
          <WorkspaceContent currentRole="tab2" />
        </div>
      </div>
    </div>
  );
};

export default Screen;
