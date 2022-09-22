<template>
  <div id="app">
    <!-- <VxmlRender :xmlContent='xmlContent'
      :recordListData="flowerList"
      :flowViewerListData="demoList"></VxmlRender> -->

      <DmnRender :xmlContent='dmnContent'> </DmnRender>
  </div>
</template>

<script lang="ts" setup>
  import {ref } from 'vue'
// import VxmlRender from './components/bpmn-render/index.vue'
import DmnRender from './components/dmn-modal-render/index.vue'
let xmlContent = ref(`<?xml version="1.0" encoding="UTF-8"?>
<definitions
    xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL"
    xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
    xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:di="http://www.omg.org/spec/DD/20100524/DI"
    xmlns:camunda="http://camunda.org/schema/1.0/bpmn" id="sid-38422fae-e03e-43a3-bef4-bd33b32041b2" targetNamespace="http://bpmn.io/bpmn" exporter="Camunda Modeler" exporterVersion="4.8.0-nightly.20210427">
    <process id="Process_1660786761843" name="请假0818" isExecutable="true">
        <startEvent id="StartEvent_1" name="开始" camunda:formKey="drag_0907">
            <outgoing>Flow_1p5etxq</outgoing>
        </startEvent>
        <sequenceFlow id="Flow_1p5etxq" sourceRef="StartEvent_1" targetRef="Activity_07x1q7i" />
        <sequenceFlow id="Flow_1odizz8" sourceRef="Activity_07x1q7i" targetRef="Activity_1msq9h4" />
        <endEvent id="Event_0rzk7r4">
            <incoming>Flow_0973okd</incoming>
        </endEvent>
        <sequenceFlow id="Flow_0973okd" sourceRef="Activity_1msq9h4" targetRef="Event_0rzk7r4" />
        <userTask id="Activity_07x1q7i" name="项目经理审批" camunda:formKey="drag_0907" camunda:assignee="U1560134649743319041">
            <incoming>Flow_1p5etxq</incoming>
            <outgoing>Flow_1odizz8</outgoing>
        </userTask>
        <userTask id="Activity_1msq9h4" name="部门领导审批" camunda:formKey="drag_0907" camunda:assignee="Ue9ca23d68d884d4ebb19d07889727dae">
            <incoming>Flow_1odizz8</incoming>
            <outgoing>Flow_0973okd</outgoing>
        </userTask>
    </process>
    <bpmndi:BPMNDiagram id="BpmnDiagram_1">
        <bpmndi:BPMNPlane id="BpmnPlane_1" bpmnElement="Process_1660786761843">
            <bpmndi:BPMNEdge id="Flow_0973okd_di" bpmnElement="Flow_0973okd">
                <di:waypoint x="500" y="120" />
                <di:waypoint x="562" y="120" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_1odizz8_di" bpmnElement="Flow_1odizz8">
                <di:waypoint x="340" y="120" />
                <di:waypoint x="400" y="120" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNEdge id="Flow_1p5etxq_di" bpmnElement="Flow_1p5etxq">
                <di:waypoint x="188" y="120" />
                <di:waypoint x="240" y="120" />
            </bpmndi:BPMNEdge>
            <bpmndi:BPMNShape id="StartEvent_1y45yut_di" bpmnElement="StartEvent_1">
                <omgdc:Bounds x="152" y="102" width="36" height="36" />
                <bpmndi:BPMNLabel>
                    <omgdc:Bounds x="159" y="145" width="23" height="14" />
                </bpmndi:BPMNLabel>
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Event_0rzk7r4_di" bpmnElement="Event_0rzk7r4">
                <omgdc:Bounds x="562" y="102" width="36" height="36" />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Activity_12gv2q7_di" bpmnElement="Activity_07x1q7i">
                <omgdc:Bounds x="240" y="80" width="100" height="80" />
                <bpmndi:BPMNLabel />
            </bpmndi:BPMNShape>
            <bpmndi:BPMNShape id="Activity_0v8tboe_di" bpmnElement="Activity_1msq9h4">
                <omgdc:Bounds x="400" y="80" width="100" height="80" />
                <bpmndi:BPMNLabel />
            </bpmndi:BPMNShape>
        </bpmndi:BPMNPlane>
    </bpmndi:BPMNDiagram>
</definitions>`)
let demoList = ref([
  {
    "activityId": "StartEvent_1",
    "activityName": "开始",
    "activityType": "startEvent",
    "startTime": 1663224550000,
    "endTime": 1663224550000,
    "durationInMillis": 3,
    "completed": true,
    "activityInstanceState": 4
  },
  {
    "activityId": "Activity_07x1q7i",
    "activityName": "项目经理审批",
    "activityType": "userTask",
    "startTime": 1663224550000,
    "endTime": 1663224742000,
    "durationInMillis": 192472,
    "completed": true,
    "activityInstanceState": 4
  },
  {
    "activityId": "Activity_1msq9h4",
    "activityName": "部门领导审批",
    "activityType": "userTask",
    "startTime": 1663224742000,
    "endTime": 1663224791000,
    "durationInMillis": 49169,
    "completed": true,
    "activityInstanceState": 4
  },
  {
    "activityId": "Event_0rzk7r4",
    "activityType": "noneEndEvent",
    "startTime": 1663224791000,
    "endTime": 1663224791000,
    "durationInMillis": 0,
    "completed": true,
    "activityInstanceState": 1
  }
])

let flowerList = ref([
  {
    "actName": "部门领导审批",
    "actId": "Activity_1msq9h4",
    "deptName": "集团总部",
    "assigneeName": "管理员",
    "duration": "49秒",
    "comment": {
      "comment": "已处理"
    },
    "createTime": 1663224742000,
    "finishTime": 1663224791000,
    "handler": "管理员"
  },
  {
    "actName": "开始",
    "actId": "StartEvent_1",
    "deptName": "集团总部",
    "assigneeName": "管理员",
    "comment": {
      "comment": "管理员发起流程"
    },
    "createTime": 1663224550000,
    "finishTime": 1663224550000,
    "handler": "管理员"
  },
  {
    "actName": "项目经理审批",
    "actId": "Activity_07x1q7i",
    "deptName": "中邮信息科技（北京）有限公司",
    "assigneeName": "wyq",
    "duration": "3分钟",
    "comment": {
      "comment": "已处理"
    },
    "createTime": 1663224550000,
    "finishTime": 1663224742000,
    "handler": "wyq"
  }
])
let dmnContent = ref(`<?xml version="1.0" encoding="UTF-8"?>
<definitions
    xmlns="https://www.omg.org/spec/DMN/20191111/MODEL/"
    xmlns:dmndi="https://www.omg.org/spec/DMN/20191111/DMNDI/"
    xmlns:dc="http://www.omg.org/spec/DMN/20180521/DC/"
    xmlns:di="http://www.omg.org/spec/DMN/20180521/DI/" id="Definitions_87c319" name="dish_87c319" namespace="http://camunda.org/schema/1.0/dmn" exporter="Camunda Modeler" exporterVersion="4.12.0">
    <decision id="Decision_dc5ce4" name="qqqqqqqqqqq">
        <informationRequirement id="InformationRequirement_0u9w5up">
            <requiredDecision href="#Decision_1i4f7j6" />
        </informationRequirement>
        <decisionTable id="DecisionTable_1pg8gal">
            <input id="InputClause_0ldcww7">
                <inputExpression id="LiteralExpression_134bx5r" typeRef="string" />
            </input>
            <output id="OutputClause_0jngrzy" typeRef="string" />
        </decisionTable>
    </decision>
    <decision id="Decision_1i4f7j6" name="qqq">
        <variable id="InformationItem_1gizcgm" />
        <literalExpression id="LiteralExpression_15ejrki" />
    </decision>
    <dmndi:DMNDI>
        <dmndi:DMNDiagram>
            <dmndi:DMNShape id="DMNShape_10002i5" dmnElementRef="Decision_dc5ce4">
                <dc:Bounds height="80" width="180" x="140" y="110" />
            </dmndi:DMNShape>
            <dmndi:DMNEdge id="DMNEdge_1f3vc6f" dmnElementRef="InformationRequirement_0u9w5up">
                <di:waypoint x="590" y="270" />
                <di:waypoint x="230" y="210" />
                <di:waypoint x="230" y="190" />
            </dmndi:DMNEdge>
            <dmndi:DMNShape id="DMNShape_029f2qr" dmnElementRef="Decision_1i4f7j6">
                <dc:Bounds height="80" width="180" x="500" y="270" />
            </dmndi:DMNShape>
        </dmndi:DMNDiagram>
    </dmndi:DMNDI>
</definitions>`)
</script>

<style lang="scss">
  #app {
    height: 100%;
  }
</style>
