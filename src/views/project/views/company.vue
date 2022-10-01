<template>
  <div class="company">
    <el-card>
      <template #header>公司项目</template>
      <div class="item">
        <h4 class="title">南昌市水土保持系统</h4>
        <div class="describe">
          <h5 class="little-title">天地一体化模块:</h5>
          <ol>
            <li>展示对应的地图,下方可以点击地图类型进行地图类型的切换.</li>
            <li>点击地图上对应的图斑标点可以查看详情图斑页面,根据对应的图斑类型跳转到详情页.</li>
            <li>根据筛选可以筛选出地图上对应的图斑列表以及项目列表.</li>
            <li>
              根据后台数据报警可展现出对应的报警图斑/项目点击对应的报警位置,可以跳转到处理报警页面进行处理
            </li>
            <li>
              根据后台数据的任务派发可以展示出对应的派发等级,点击地图上对应的派发图斑可以进行派发事件处理
            </li>
          </ol>
        </div>
        <div class="describe">
          <h5 class="little-title">项目管理页面:</h5>
          <ol>
            <li>左边有五个选项卡,分别对应不同的表格页面</li>
            <li>
              对项目管理的一些增删查改,点击项目管理详情页可查看对应项目在地图上的位置,从而快速定位
            </li>
            <li>对图斑管理的一些增删查改,点击图斑管理详情页可以查看对应项目在地图上的位置</li>
            <li>
              数据统计的一些Echarts表格,通过数据可视化的方式,展示对应时间段,本公司的一些成果概览,也可以单查询某个项目的成果概览
            </li>
            <li>查看对应子公司的季度报表填报情况,对于未填写的子公司发送对应的提醒</li>
            <li>对公司员工的一些操作,对公司的某些员工进行加减分,对应的操作页面</li>
          </ol>
        </div>
        <div class="describe">
          <h5 class="little-title">任务派发页面:</h5>
          <ol>
            <li>展示对应的地图中的图斑列表,可以点击右边的操作对对应的图斑进行任务派发.</li>
          </ol>
        </div>
      </div>
      <div class="item">
        <h4 class="title">中物智建地磅卫士管理系统</h4>
        <div class="describe">
          <h5 class="little-title">首页模块:</h5>
          <ol>
            <li>根据选择对应的公司/项目展示不同的echarts表格.</li>
            <li>点击表格中的日期/时间筛选可以筛选出对应时间段的数据成果.</li>
          </ol>
        </div>
        <div class="describe">
          <h5 class="little-title">地磅可视化模块:</h5>
          <ol>
            <li>选择对应表格中的地磅列表详情,可以跳转到对应的详情页面</li>
            <li>详情页面中展示的是从萤石云请求过来的对应摄像头的时实数据.</li>
            <li>展示对应地磅的开闸闭闸情况</li>
          </ol>
        </div>
        <div class="describe">
          <h5 class="little-title">报警预警系统:</h5>
          <ol>
            <li>对地磅超重报警的情况做出响应.</li>
            <li>通过分级派发的方式,上接收到派发给下,下收到派发处理完返还给上</li>
          </ol>
        </div>
      </div>
      <div class="item">
        <h4 class="title">
          <a href="http://www.meant.cc:12345/datascreen" target="_blank"
            >物联网智能井盖管理大屏(可点击/仅静态数据)</a
          >
        </h4>
        <div class="describe">
          <h5 class="little-title">首页模块:</h5>
          <ol>
            <li>根据选择对应的项目切换到对应的项目详情页.</li>
            <li>点击"主要产品"可跳转到城市规划解决方案选项.</li>
            <li>中间是地图,可以展示地图的一些数据,根据上方的筛选可以定位到项目对应的设备所在地.</li>
            <li>右边是天气模块,根据客户对应的IP获取到客户的位置,对客户位置的天气的一个展示</li>
            <li>右下方是报警系统的简略展示,针对报警优先级筛选出排行在前6个的报警情况</li>
          </ol>
        </div>
        <div class="describe">
          <h5 class="little-title">项目详情页:</h5>
          <ol>
            <li>项目详情页中有很多子项,点击对应的子项展示不同的内容</li>
          </ol>
        </div>
        <div class="describe">
          <h5 class="little-title">城市规划详情页:</h5>
          <ol>
            <li>城市规划详情页有很多子项,点击对应的子项展示不同的内容.</li>
          </ol>
        </div>
      </div>
      <div class="item">由于时间久远,一些项目无法展示</div>
    </el-card>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.company {
  .title {
    color: #6cb1ec;
  }
  .item:not(:first-child) {
    margin-top: 20px;
  }
  .describe {
    margin: 10px 0 10px;
    text-indent: 14px;
    span,
    ol {
      margin-left: 10px;
    }
  }
}
</style>
