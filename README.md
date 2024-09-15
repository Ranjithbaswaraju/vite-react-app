


memorization :

memorization is a advanced technique in react which is used tocache the result of the functions or entire functions without being recalculations


react will provide the 3 ways of memorization:

1.React.memo()
2.useMemo()
3.useCallback()

useMemo():useMemo is a hook in functional based component which memorizes the result returned by function,with being recalcualated were same inputs were given


syntax:useMemo(()=>{},[])

DAY-1--COFFEE -milk -50 rupees BIRYANI --300

DAY-2--COFFEE -milk -50 rupees BIRYANI --300


DAY-3--COFFEE -milk -50 rupees BIRYANI --300

